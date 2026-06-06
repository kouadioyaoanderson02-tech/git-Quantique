package calcul;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Calculatrice calc = new Calculatrice();

        System.out.println("=== CALCULATRICE ===");
        System.out.println("1 - Addition");
        System.out.println("2 - Soustraction");
        System.out.println("3 - Multiplication");
        System.out.println("4 - Division");

        System.out.print("Choisissez une opération : ");
        int choix = sc.nextInt();

        System.out.print("Entrez la première valeur : ");
        double a = sc.nextDouble();

        System.out.print("Entrez la deuxième valeur : ");
        double b = sc.nextDouble();

        double resultat = 0;

        switch (choix) {

            case 1:
                resultat = calc.addition(a, b);
                break;

            case 2:
                resultat = calc.soustraction(a, b);
                break;

            case 3:
                resultat = calc.multiplication(a, b);
                break;

            case 4:
                if (b == 0) {
                    System.out.println("Erreur : division par zéro impossible !");
                    sc.close();
                    return;
                }
                resultat = calc.division(a, b);
                break;

            default:
                System.out.println("Choix invalide !");
                sc.close();
                return;
        }

        System.out.println("Résultat : " + resultat);

        sc.close();
    }
}