import static spark.Spark.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Server {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/database_db?useSSL=false&serverTimezone=UTC";
    private static final String JDBC_INIT_URL = "jdbc:mysql://localhost:3306/?useSSL=false&serverTimezone=UTC";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";
    private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) {
        initializeDatabase();
        port(8080);
        enableCORS("*", "GET,POST,OPTIONS", "Content-Type,Authorization");

        post("/api/etudiants", (req, res) -> {
            res.type("application/json");
            Etudiant etudiant = gson.fromJson(req.body(), Etudiant.class);

            if (etudiant == null || etudiant.nom == null || etudiant.prenom == null || etudiant.classe == null) {
                res.status(400);
                return gson.toJson(Map.of("error", "Données invalides"));
            }

            insertEtudiant(etudiant);
            return gson.toJson(etudiant);
        });

        get("/api/etudiants", (req, res) -> {
            res.type("application/json");
            List<Etudiant> liste = listEtudiants();
            return gson.toJson(liste);
        });

        post("/api/enseignants", (req, res) -> {
            res.type("application/json");
            Enseignant enseignant = gson.fromJson(req.body(), Enseignant.class);

            if (enseignant == null || enseignant.nom == null || enseignant.prenom == null || enseignant.matiere == null) {
                res.status(400);
                return gson.toJson(Map.of("error", "Données invalides"));
            }

            insertEnseignant(enseignant);
            return gson.toJson(enseignant);
        });

        get("/api/enseignants", (req, res) -> {
            res.type("application/json");
            List<Enseignant> liste = listEnseignants();
            return gson.toJson(liste);
        });

        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });
    }

    private static void enableCORS(String origin, String methods, String headers) {
        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", origin);
            response.header("Access-Control-Allow-Methods", methods);
            response.header("Access-Control-Allow-Headers", headers);
            response.header("Access-Control-Allow-Credentials", "true");
        });
    }

    private static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, DB_USER, DB_PASSWORD);
    }

    private static void initializeDatabase() {
        try (Connection con = DriverManager.getConnection(JDBC_INIT_URL, DB_USER, DB_PASSWORD);
             Statement stmt = con.createStatement()) {
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS database_db");
            stmt.executeUpdate("USE database_db");
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS etudiants (" +
                    "id INT AUTO_INCREMENT PRIMARY KEY, " +
                    "nom VARCHAR(255) NOT NULL, " +
                    "prenom VARCHAR(255) NOT NULL, " +
                    "age INT NOT NULL, " +
                    "classe VARCHAR(50) NOT NULL)"
            );
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS enseignants (" +
                    "id INT AUTO_INCREMENT PRIMARY KEY, " +
                    "nom VARCHAR(255) NOT NULL, " +
                    "prenom VARCHAR(255) NOT NULL, " +
                    "matiere VARCHAR(255) NOT NULL, " +
                    "experience INT NOT NULL)"
            );
            System.out.println("✓ Base de données database_db et tables etudiants et enseignants prêtes.");
        } catch (SQLException e) {
            System.err.println("✗ ERREUR : Impossible d'initialiser la base de données MySQL.");
            System.err.println("   Vérifie que MySQL est lancé et que les identifiants sont corrects.");
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void insertEtudiant(Etudiant etudiant) throws SQLException {
        try (Connection con = getConnection();
             PreparedStatement stmt = con.prepareStatement(
                     "INSERT INTO etudiants (nom, prenom, age, classe) VALUES (?, ?, ?, ?)")
        ) {
            stmt.setString(1, etudiant.nom);
            stmt.setString(2, etudiant.prenom);
            stmt.setInt(3, etudiant.age);
            stmt.setString(4, etudiant.classe);
            stmt.executeUpdate();
        }
    }

    private static List<Etudiant> listEtudiants() throws SQLException {
        List<Etudiant> etudiants = new ArrayList<>();

        try (Connection con = getConnection();
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT nom, prenom, age, classe FROM etudiants")
        ) {
            while (rs.next()) {
                Etudiant etudiant = new Etudiant();
                etudiant.nom = rs.getString("nom");
                etudiant.prenom = rs.getString("prenom");
                etudiant.age = rs.getInt("age");
                etudiant.classe = rs.getString("classe");
                etudiants.add(etudiant);
            }
        }

        return etudiants;
    }

    private static void insertEnseignant(Enseignant enseignant) throws SQLException {
        try (Connection con = getConnection();
             PreparedStatement stmt = con.prepareStatement(
                     "INSERT INTO enseignants (nom, prenom, matiere, experience) VALUES (?, ?, ?, ?)")
        ) {
            stmt.setString(1, enseignant.nom);
            stmt.setString(2, enseignant.prenom);
            stmt.setString(3, enseignant.matiere);
            stmt.setInt(4, enseignant.experience);
            stmt.executeUpdate();
        }
    }

    private static List<Enseignant> listEnseignants() throws SQLException {
        List<Enseignant> enseignants = new ArrayList<>();

        try (Connection con = getConnection();
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT nom, prenom, matiere, experience FROM enseignants")
        ) {
            while (rs.next()) {
                Enseignant enseignant = new Enseignant();
                enseignant.nom = rs.getString("nom");
                enseignant.prenom = rs.getString("prenom");
                enseignant.matiere = rs.getString("matiere");
                enseignant.experience = rs.getInt("experience");
                enseignants.add(enseignant);
            }
        }

        return enseignants;
    }

    private static class Etudiant {
        String nom;
        String prenom;
        int age;
        String classe;
    }

    private static class Enseignant {
        String nom;
        String prenom;
        String matiere;
        int experience;
    }
}
