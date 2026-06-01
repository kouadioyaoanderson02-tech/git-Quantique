package GESTION_BIBLIOTHEQUE.Model;
public class Livre{
        // Atribute
        private int id ;
        private String titre;
        private String auteur;
        private int anneePublication;
        private boolean disponible;

        // constructeur sert á crée un objet livre 
        public Livre(int id, String titre, String auteur, int anneePublication, boolean disponible){
            this.id = id;
            this.titre = titre;
            this.auteur =  auteur;
            this.anneePublication = anneePublication;
            this.disponible = disponible;

        }
        
        // la méthode private encapsulations (concept poo)
            //  la méthode getters 
                public int getId(){
                    return id;
                }
                public String getAuteur(){
                    return auteur;
                }
                public String getTitre(){
                    return titre;
                }
                public int getAnneePublication(){
                    return anneePublication;
                }
                public boolean isDisponible(){
                    return disponible;
                }
                // la methode setters : elle sert a récupéré les données et a modifiers aussi

                public void setAuteur(String auteur){
                    this.auteur = auteur;
                }
                public void setTitre(String titre){
                    this.titre = titre;
                }
                public void setAnneePublication(int anneePublication){
                    this.anneePublication = anneePublication;
                }
                public void setDiponible(boolean disponible){
                    this.disponible = disponible;
                }

                // méthode d’affichage 

                public void afficherLivre() {
                    System.out.println("D:" + id);
                        System.out.println("Titre:" + titre);
                            System.out.println("Auteur:" + auteur);
                                System.out.println("Année:" + anneePublication);
                                    System.out.println("Diponible:" + disponible);
                }
                

}