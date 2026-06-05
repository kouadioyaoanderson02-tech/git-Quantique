package GESTION_BIBLIOTHEQUE.Model;
public class Livre{
        // Atribute // la méthode private encapsulations (concept poo)
        private int id ;
        private String Titre;
        private String Auteur;
        private String Categorie;
        private int Quantite; 
        private int Annee_publication;
        private boolean disponible;

        // constructeur sert á crée un objet livre 
        public Livre(int id, String Titre, String Auteur, String Categorie, int Quantite, int Annee_publication, boolean disponible){
            this.id = id;
            this.Titre = Titre;
            this.Auteur =  Auteur;
            this.Categorie = Categorie;
            this.Quantite = Quantite;
            this.Annee_publication = Annee_publication;
            this.disponible = disponible;

        }
        
        
            //  la méthode getters 
                public int getId(){
                    return id;
                }
                
                public String getTitre(){
                    return Titre;
                }
                public String getAuteur(){
                    return Auteur;
                }
                 public String getCategorie() {
                    return Categorie;
                }
                public int getQuantite(){
                    return Quantite;
                }
                
                public int getAnneePublication(){
                    return Annee_publication;
                }
                public boolean isDisponible(){
                    return disponible;
                }
                // la methode setters : elle sert a récupéré les données et a modifiers aussi
                 public void setTitre(String Titre){
                    this.Titre = Titre;
                }
                public void setAuteur(String Auteur){
                    this.Auteur = Auteur;
                }
                 public void setCategorie(String Categorie){
                    this.Categorie = Categorie;
                }
                 public void setQuantite(int Quantite){
                    this.Quantite = Quantite;
                }
               
                public void setAnneePublication(int Annee_publication){
                    this.Annee_publication = Annee_publication;
                }
                public void setDiponible(boolean disponible){
                    this.disponible = disponible;
                }

                // méthode d’affichage 

                public void afficherLivre() {
                    System.out.println("ID:" + id);
                        System.out.println("Titre:" + Titre);
                            System.out.println("Auteur:" + Auteur);
                            System.out.println("Categorie" + Categorie);
                            System.out.println("Quantite:" + Quantite);
                                System.out.println("Année:" + Annee_publication);
                                    System.out.println("Diponible:" + disponible);
                }
                

}