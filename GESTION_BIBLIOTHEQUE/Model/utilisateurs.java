package GESTION_BIBLIOTHEQUE.Model;

import java.util.ArrayList;

// Classe représentant un utilisateur de la bibliothèque
public class utilisateurs {

    // Attributs
    private int id;
    private String nom;
    private String prenom;
    private ArrayList<Livre> livreEmpruntes;

    // Constructeur
    public utilisateurs(int id, String nom, String prenom) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.livreEmpruntes = new ArrayList<>();
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public ArrayList<Livre> getLivreEmpruntes() {
        return livreEmpruntes;
    }

    // Setters
    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    // Méthode pour emprunter un livre
    public void emprunterLivre(Livre livre) {
        livreEmpruntes.add(livre);
    }

    // Méthode pour retourner un livre
    public void retournerLivre(Livre livre) {
        livreEmpruntes.remove(livre);
    }

    // Afficher les informations de l'utilisateur
    public void afficherutilisateur() {

        System.out.println("ID : " + id);
        System.out.println("Nom : " + nom);
        System.out.println("Prénom : " + prenom);

        System.out.println("Nombre de livres empruntés : " + livreEmpruntes.size());

        if (!livreEmpruntes.isEmpty()) {

            System.out.println("Liste des livres :");

            for (Livre l : livreEmpruntes) {
                System.out.println("- " + l.getTitre());
            }

        } else {

            System.out.println("Aucun livre emprunté.");
        }
    }
}