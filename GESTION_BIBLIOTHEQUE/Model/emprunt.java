package GESTION_BIBLIOTHEQUE.Model;
import java.time.LocalDate;


public class emprunt {
        private Livre livre;
        private utilisateurs utilisateurs;
        private LocalDate dateEmprunt;
        private LocalDate dateRetour;
        private boolean disponible;


        //constructeur
        public void emprunter(Livre livre, utilisateurs utilisateurs) {
            this.livre = livre;
            this.utilisateurs = utilisateurs;
              this.dateEmprunt = LocalDate.now();
              this.dateRetour = null;


        }
        //méthode pour retourner 
        public void retournerLivre(){
            this.dateRetour = LocalDate.now();
            this.disponible = true;

        }
        public void setDiponible(boolean disponible){
            this.disponible = disponible;
        }
        //getters

            public boolean isDisponible(){
                return disponible;
            }
        public Livre getLivre(){
            return livre;
        }
        public utilisateurs getutilisateurs() {
            return utilisateurs;
        }
        public LocalDate getDateEmprunt(){
            return dateEmprunt ;
        }
         public LocalDate getDateRetour(){
            return dateRetour ;
        }
        //Affichage des élements

        public void afficherEmprunt(){
            System.out.println("Livre:" + livre.getTitre());
            System.out.println("utilisateurs:" + utilisateurs.getNom());
            System.out.println("Date de l’emprunt:" + dateEmprunt);
            System.out.println("Date Retour:" + dateRetour);
            
        }



    
}
