import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnexionDB {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/database_db?useSSL=false&serverTimezone=UTC";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        System.out.println("Test de connexion à la base de données...");
        testConnexion();
    }

    public static void testConnexion() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("✓ Driver MySQL chargé avec succès !");

            Connection con = DriverManager.getConnection(JDBC_URL, DB_USER, DB_PASSWORD);
            System.out.println("✓ Connexion à la base de données réussie !");
            con.close();
        } catch (ClassNotFoundException e) {
            System.err.println("✗ ERREUR : Driver MySQL non trouvé !");
            System.err.println("   Télécharge le JAR mysql-connector-java-8.0.33.jar");
            System.err.println("   et mets-le dans le dossier Backend/");
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println("✗ ERREUR : Impossible de se connecter à MySQL !");
            System.err.println("   Vérifie que MySQL est lancé et que la base database_db existe.");
            e.printStackTrace();
        }
    }
}
