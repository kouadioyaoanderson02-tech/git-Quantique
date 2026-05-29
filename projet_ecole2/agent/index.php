<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Parc Automobile — Agent</title>
  <link rel="stylesheet" href="../shared.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>
<body>

  <header class="navbar">
    <div class="logo">
      <i class="fa-solid fa-car"></i>
      <span>ParcAuto</span>
    </div>
    <nav>
      <a href="../index.php"><i class="fa-solid fa-house"></i> Accueil</a>
      <a href="index.php" class="active"><i class="fa-solid fa-user-tie"></i> Agent</a>
      <a href="../voiture/index.php"><i class="fa-solid fa-car-side"></i> Voiture</a>
    </nav>
  </header>

  <div class="page-header">
    <h1><i class="fa-solid fa-user-tie"></i> Inscription Agent</h1>
    <p>Enregistrez un nouvel agent du parc automobile</p>
  </div>

  <div class="card-container">
    <div class="card">
      <h2><i class="fa-solid fa-id-card"></i> Informations de l'agent</h2>

      <form action="inserer.php" method="POST" >

        <div class="form-row">
          <div class="form-group">
            <label for="nom"><i class="fa-solid fa-user"></i> Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Entrez votre nom svp" required/>
          </div>
          <div class="form-group">
            <label for="prenoms"><i class="fa-solid fa-user"></i> Prénoms</label>
            <input type="text" id="prenoms" name="prenoms" placeholder="Entrez votre prenom svp " required/>
          </div>
        </div>

        <div class="form-group">
          <label for="Fonction"><i class="fa-solid fa-briefcase"></i> Fonction</label>
          <input type="text" id="Fonction" name="fonction" placeholder="Ex: Chauffeur, Gestionnaire..." required/>
        </div>

        <div class="form-group">
          <label for="commune"><i class="fa-solid fa-location-dot"></i> Commune</label>
          <input type="text" id="commune" name="commune" placeholder="Ex: Cocody, Yopougon..." required/>
        </div>

        <div class="btn-group">
          <button type="submit" class="btn-primary">
            <i class="fa-solid fa-paper-plane"></i> Envoyer
          </button>
          <button type="reset" class="btn-reset">
            <i class="fa-solid fa-xmark"></i> Annuler
          </button>
        </div>
      </form>
      
        <a href="afficher.php"> liste des agents</a>
      
          
      <div class="switch-link">
        Gérer les véhicules ? <a href="../voiture/index.php"><i class="fa-solid fa-car-side"></i> Aller à la page Voiture</a>
      </div>
    </div>
  </div>

  <footer>© 2025 ParcAuto — Gestion du parc automobile</footer>

</body>
</html>
