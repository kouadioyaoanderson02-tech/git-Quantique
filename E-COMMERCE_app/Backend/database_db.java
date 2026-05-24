
import java.sql.DriverManager;

public class database_db {
  public static void main(String[] args){
    try {
        Class.forName("Boutique_db.sql  ");
        System.out.println("Driver ok");
        String url =  "pdo:mysql://localhost:5432/Boutique.sql";
        String  username = "root";
        String  password = "";

        connection conn = DriverManager.getConnection(url, username, password);
        System.out.println("connexion effective !");



    }
    catch (Exception e) {
        e.printStackTrace();
    }
  }  
}
