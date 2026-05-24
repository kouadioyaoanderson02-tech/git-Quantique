<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>parc atomobile </title>     
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <header>
            <h1> parc automobile</h1>
        </header>
    </nav>
    <div class="container">  
    <form action="traitement.php" method="POST">
        <h2>choisir une voiture</h2>
        <label for="dataachat">date d’achat:</label>
        <input type="text" id="dataachat" name="dataachat" required><br><br>
        <label for="marque">marque:</label>
        <input type="text" id="Fonction" name="Fonction" required><br><br>
        <label for="couleur">Couleur:</label>
        <input type="text" id="couleur" name="couleur" required><br><br>

        
         <input type="reset" value="Annulé">
        <input type="submit" value="S'inscrire">


    </form>
    </div>
   
</body>
</html>