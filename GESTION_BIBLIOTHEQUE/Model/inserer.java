package GESTION_BIBLIOTHEQUE.Model;

import GESTION_BIBLIOTHEQUE.database.connexion_db;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class inserer {

    public static void main(String[] args) {

        try {

            Connection conn = connexion_db.getConnection();

            String sql = "INSERT INTO livre "
                    + "(Titre, Auteur, Categorie, Quantite, Annee_publication, disponible) "
                    + "VALUES (?, ?, ?, ?, ?, ?)";

            PreparedStatement ps = conn.prepareStatement(sql);

            ps.setString(1, "Les Misérables");
            ps.setString(2, "Victor Hugo");
            ps.setString(3, "Poésie");
            ps.setInt(4, 12);
            ps.setInt(5, 2002);
            ps.setBoolean(6, true);

            int resultat = ps.executeUpdate();

            if (resultat > 0) {
                System.out.println("Livre ajouté avec succès !");
            }

            ps.close();
            conn.close();

        } catch (Exception e) {
            System.out.println("Erreur : " + e.getMessage());
        }
    }
}