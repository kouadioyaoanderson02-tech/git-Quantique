<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Parc Automobile</title>
  <link rel="stylesheet" href="shared.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>
<body>

  <header class="navbar">
    <div class="logo">
      <i class="fa-solid fa-car"></i>
      <span>ParcAuto</span>
    </div>
    <nav>
      <a href="agent/index.php"><i class="fa-solid fa-user-tie"></i> Agent</a>
      <a href="voiture/index.php"><i class="fa-solid fa-car-side"></i> Voiture</a>
    </nav>
  </header>

  <div class="page-header">
    <h1><i class="fa-solid fa-car"></i> Parc Automobile</h1>
    <p>Gérez vos agents et vos véhicules en toute simplicité</p>
  </div>

  <div class="card-container" style="gap:24px;flex-wrap:wrap;">

    <a href="agent/index.php" class="card" style="text-decoration:none;text-align:center;max-width:280px;cursor:pointer;">
      <i class="fa-solid fa-user-tie" style="font-size:3rem;color:#2563eb;margin-bottom:16px;display:block;"></i>
      <h2 style="justify-content:center;">Gestion des Agents</h2>
      <p style="color:#6b7280;margin-top:10px;font-size:0.95rem;">Enregistrer et gérer les agents du parc</p>
    </a>

    <a href="voiture/index.html" class="card" style="text-decoration:none;text-align:center;max-width:280px;cursor:pointer;">
      <i class="fa-solid fa-car-side" style="font-size:3rem;color:#2563eb;margin-bottom:16px;display:block;"></i>
      <h2 style="justify-content:center;">Gestion des Voitures</h2>
      <p style="color:#6b7280;margin-top:10px;font-size:0.95rem;">Enregistrer et gérer les véhicules du parc</p>
    </a>

  </div>

  <footer>© 2025 ParcAuto — Gestion du parc automobile</footer>

</body>
</html>
