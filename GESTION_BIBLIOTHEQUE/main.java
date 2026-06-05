package GESTION_BIBLIOTHEQUE;

import java.sql.Connection;
import GESTION_BIBLIOTHEQUE.database.connexion_db;

public class main {

    public static void Main(String[] args) {

        Connection conn = connexion_db.getConnection();

        if (conn != null) {
            System.out.println("Base de données connectée.");
        } else {
            System.out.println("Connexion échouée.");
        }
    }
}