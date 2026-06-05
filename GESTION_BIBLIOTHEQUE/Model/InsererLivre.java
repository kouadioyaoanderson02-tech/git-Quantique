package GESTION_BIBLIOTHEQUE.Model; // Déclare le package du programme

import GESTION_BIBLIOTHEQUE.Model.Livre; // Importe la classe Livre
import java.util.Scanner; // Importe Scanner pour lire les saisies clavier

public class InsererLivre { // Classe principale

    public static void main(String[] args) { // Point d'entrée du programme

        Scanner sc = new Scanner(System.in); // Création d'un objet Scanner

        // Demande le titre du livre
        System.out.print("Titre du livre : ");
        String Titre = sc.nextLine(); // Stocke le titre saisi

        // Demande l'auteur
        System.out.print("Auteur : ");
        String Auteur = sc.nextLine(); // Stocke l'auteur saisi

        // Demande la catégorie
        System.out.print("Catégorie : ");
        String Categorie = sc.nextLine(); // Stocke la catégorie saisie

        // Demande la quantité
        System.out.print("Quantité : ");
        int Quantite = sc.nextInt(); // Stocke la quantité saisie

        // Demande l'année de publication
        System.out.print("Année de publication : ");
        int Annee_publication = sc.nextInt(); // Stocke l'année saisie

        // Création d'un objet Livre avec les données saisies
        Livre livre = new Livre(
                0,                 // ID temporaire
                Titre,             // Titre saisi
                Auteur,            // Auteur saisi
                Categorie,         // Catégorie saisie
                Quantite,          // Quantité saisie
                Annee_publication,  // Année saisie
                true               // Disponible par défaut
        );

        // Affiche un message
        System.out.println("\nInformations saisies :");

        // Affiche les informations du livre
        livre.afficherLivre();

        // Ferme le Scanner pour libérer les ressources
        sc.close();
    }
}