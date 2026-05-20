import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class test_connexion {
public static void main(String[] args) {

try {
    Connection con = DriverManager.getConnection(
         "jbdc:mysql://localhost:3306/database_db",
         "root",
         ""
    );
    System.out.println("connexion réussie !");
} catch  (SQLException e)  {
    e.printStackTrace();

}
}
}