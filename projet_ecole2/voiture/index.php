<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Parc Automobile — Voiture</title>
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
      <a href="../agent/index.php"><i class="fa-solid fa-user-tie"></i> Agent</a>
      <a href="index.php" class="active"><i class="fa-solid fa-car-side"></i> Voiture</a>
    </nav>
  </header>

  <div class="page-header">
    <h1><i class="fa-solid fa-car-side"></i> Enregistrer un véhicule</h1>
    <p>Ajoutez un nouveau véhicule au parc automobile</p>
  </div>

  <div class="card-container">
    <div class="card">
      <h2><i class="fa-solid fa-car"></i> Informations du véhicule</h2>

      <form action="#" method="POST">

        <div class="form-group">
          <label for="dateachat"><i class="fa-solid fa-calendar"></i> Date d'achat</label>
          <input type="date" id="dateachat" name="dateachat" required/>
        </div>

        <div class="form-group">
          <label for="marque"><i class="fa-solid fa-tag"></i> Marque</label>
          <input type="text" id="marque" name="marque" placeholder="Ex: Toyota, Peugeot..." required/>
        </div>

        <div class="form-group">
          <label for="couleur"><i class="fa-solid fa-palette"></i> Couleur</label>
          <input type="text" id="couleur" name="couleur" placeholder="Ex: Blanc, Noir..." required/>
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

      <div class="switch-link">
        Gérer les agents ? <a href="../agent/index.php"><i class="fa-solid fa-user-tie"></i> Aller à la page Agent</a>
      </div>
    </div>
  </div>

  <footer>© 2025 ParcAuto — Gestion du parc automobile</footer>

</body>
</html>
