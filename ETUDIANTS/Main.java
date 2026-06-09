package ETUDIANTS;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Entrez le nom de l'etudiant :");
        String nom = sc.nextLine();

        System.out.println("Entrez le prenom de l'etudiant :");
        String prenom = sc.nextLine();

        System.out.println("Entrez l'age de l'etudiant :");
        int age = sc.nextInt();

        System.out.println("Entrez la moyenne de l'etudiant :");
        double moyenne = sc.nextDouble();

        sc.nextLine(); // vide le buffer

        System.out.println("Entrez la classe de l'etudiant :");
        String classe = sc.nextLine();

        System.out.println("\n--- Informations de l'etudiant ---");
        System.out.println("Nom : " + nom);
        System.out.println("Prenom : " + prenom);
        System.out.println("Age : " + age);
        System.out.println("Moyenne : " + moyenne);
        System.out.println("Classe : " + classe);

        if (moyenne >= 10) {
            System.out.println("L'etudiant est admis.");
        } else {
            System.out.println("L'etudiant est recale.");
        }
        switch ((int) moyenne) {
            case 10:
                System.out.println("L'etudiant est admis avec mention passable.");
                break;
            case 12:
                System.out.println("L'etudiant est admis avec mention assez bien.");
                break;
            case 14:
                System.out.println("L'etudiant est admis avec mention bien.");
                break;
            case 16:
                System.out.println("L'etudiant est admis avec mention très bien.");
                break;
            default:
                System.out.println("L'etudiant est admis sans mention.");
        }

        sc.close();
    }
}