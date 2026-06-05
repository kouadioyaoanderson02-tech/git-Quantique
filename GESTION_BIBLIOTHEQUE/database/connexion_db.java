package GESTION_BIBLIOTHEQUE.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connexion_db {

    private static final String URL =
            "jdbc:mysql://localhost:3306/bibliotheque_bd";

    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static Connection getConnection() {

        try {
            Connection conn = DriverManager.getConnection(
                    URL,
                    USER,
                    PASSWORD
            );

            System.out.println("Connexion réussie !");
            return conn;

        } catch (SQLException e) {
            System.out.println("Erreur : " + e.getMessage());
            return null;
        }
    }
}