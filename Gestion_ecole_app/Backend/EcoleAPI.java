import java.sql.*;
import java.util.*;

public class EcoleAPI {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/database_db?useSSL=false&serverTimezone=UTC";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";

    static class Etudiant {
        String nom, prenom, classe;
        int age;

        public String toJSON() {
            return "{\"nom\":\"" + nom + "\",\"prenom\":\"" + prenom + "\",\"age\":" + age + ",\"classe\":\"" + classe + "\"}";
        }
    }

    public static void main(String[] args) {
        System.out.println("Démarrage du serveur Gestion Ecole...");
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("✓ Driver MySQL trouvé");
        } catch (ClassNotFoundException e) {
            System.err.println("✗ ERREUR : Driver MySQL manquant!");
            System.err.println("Solutions :");
            System.err.println("1. Lance setup.bat pour télécharger le driver");
            System.err.println("2. Ou télécharge manuellement depuis https://dev.mysql.com/downloads/connector/j/");
            System.exit(1);
        }

        testConnexion();
        
        System.out.println("\n=== API DISPONIBLE ===");
        System.out.println("Ce serveur simple affiche les données de la base MySQL.");
        System.out.println("Pour une API HTTP complète, utilise la version Maven avec Spark.");
        System.out.println("Pour l'instant, teste la connexion en exécutant ce programme.");
    }

    static void testConnexion() {
        try {
            Connection con = DriverManager.getConnection(JDBC_URL, DB_USER, DB_PASSWORD);
            System.out.println("✓ Connexion MySQL réussie !");

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM etudiants");

            System.out.println("\n=== Étudiants enregistrés ===");
            if (!rs.isBeforeFirst()) {
                System.out.println("(aucun étudiant pour l'instant)");
            } else {
                while (rs.next()) {
                    System.out.println("- " + rs.getString("nom") + " " + rs.getString("prenom") + 
                                     " (classe: " + rs.getString("classe") + ", age: " + rs.getInt("age") + ")");
                }
            }

            rs.close();
            stmt.close();
            con.close();
        } catch (SQLException e) {
            System.err.println("✗ ERREUR de connexion :");
            System.err.println("   - MySQL est-il lancé ?");
            System.err.println("   - La base 'database_db' existe-t-elle ?");
            System.err.println("   - Les identifiants sont-ils corrects ? (root / vide)");
            e.printStackTrace();
        }
    }

    public static void insertEtudiant(String nom, String prenom, int age, String classe) throws SQLException {
        Connection con = DriverManager.getConnection(JDBC_URL, DB_USER, DB_PASSWORD);
        PreparedStatement stmt = con.prepareStatement(
            "INSERT INTO etudiants (nom, prenom, age, classe) VALUES (?, ?, ?, ?)"
        );
        stmt.setString(1, nom);
        stmt.setString(2, prenom);
        stmt.setInt(3, age);
        stmt.setString(4, classe);
        stmt.executeUpdate();
        stmt.close();
        con.close();
        System.out.println("✓ Étudiant " + nom + " " + prenom + " ajouté !");
    }
}
