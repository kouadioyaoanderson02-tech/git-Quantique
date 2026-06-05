package GESTION_BIBLIOTHEQUE.Model;

public class Personne {

    protected int id;
    protected String nom;
    protected String prenom;

    public Personne(int id, String nom, String prenom) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getNomComplet() {
        return nom + " " + prenom;
    }
}