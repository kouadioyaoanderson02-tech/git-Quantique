package ETUDIANTS;

// Déclaration de la classe Etudiant
public class Etudiant {

    // Attributs (variables appartenant à chaque objet Etudiant)
    private String nom;
    private String prenom;
    private int age;
    private  Double note ;
    private Double moyenne ;
    private String classe;

    // Constructeur : appelé lors de la création d'un objet
    public Etudiant(String nom, String prenom, int age, Double note, Double moyenne, String classe) {

        // this.nom = attribut de l'objet
        // nom = paramètre reçu par le constructeur
        this.nom = nom;

        this.prenom = prenom;
        this.age = age;
        this.note = note;
        this.moyenne =  moyenne;
        this.classe = classe;
    }

    // Getter pour récupérer le nom
    public String getNom() {
        return nom;
    }

    // Getter pour récupérer le prénom
    public String getPrenom() {
        return prenom;
    }

    // Getter pour récupérer l'âge
    public int getAge() {
        return age;
    }
    public Double getNote(){
        return note;
    }
    public Double getMoyenne(){
        return moyenne ;
    }

    // Getter pour récupérer la classe
    public String getClasse() {
        return classe;
    }

    // Setter pour modifier le nom
    public void setNom(String nom) {
        this.nom = nom;
    }

    // Setter pour modifier le prénom
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    // Setter pour modifier l'âge
    public void setAge(int age) {
        this.age = age;
    }
    public void setNote(double note){
        this.note = note;
    }
    public void setMoyenne(Double moyenne){
        this.moyenne = moyenne;
    }
    

    // Setter pour modifier la classe
    public void setClasse(String classe) {
        this.classe = classe;
    }

    // Méthode qui affiche les informations de l'étudiant
    public void afficherInfos() {
        System.out.println("Nom : " + this.nom);
        System.out.println("Prénom : " + this.prenom);
        System.out.println("Age : " + this.age);
        System.out.println("note : " + this.note);
        System.out.println("moyenne : " + this.moyenne);
        System.out.println("Classe : " + this.classe);
    }

    // Méthode toString() appelée automatiquement lors d'un affichage de l'objet
    @Override
    public String toString() {
        return "Etudiant{" +
                "nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", age=" + age +
                ", note=" + note +
                ", Moyenne=" + moyenne +
                ", classe='" + classe + '\'' +
                '}';
    }
}