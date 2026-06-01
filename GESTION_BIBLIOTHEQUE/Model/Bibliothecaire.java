package GESTION_BIBLIOTHEQUE.Model;

public class Bibliothecaire {
    private int id;
    private String nom;
    private String prenom;
    //  constructeur
    public Bibliothecaire(int id, String nom, String prenom) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }
    Bibliothecaire b1 = new Bibliothecaire(1, "Doe", "John");
    // getters
    public int getId() {
        return id;
    }
    public String getNom() {
        return nom;
    }
    public String getPrenom() {
        return prenom;
    }

   @Override
    public String toString() {
        return "Bibliothécaire {" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                '}';
    }

}
