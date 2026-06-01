package GESTION_BIBLIOTHEQUE;

import GESTION_BIBLIOTHEQUE.Model.Bibliothecaire;

public class main {

    public static void main(String[] args) {  

        Bibliothecaire b1 = new Bibliothecaire(
                1,
                "Kouadio",
                "Anderson"
        );

        System.out.println("ID : " + b1.getId());
        System.out.println("Nom : " + b1.getNom());
        System.out.println("Prénom : " + b1.getPrenom());
    }
}