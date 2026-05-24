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
        <h2>login inscription</h2>
        <label for="nom">Nom:</label>
        <input type="text" id="nom" name="nom" required><br><br>

        <label for="prenoms">Prénom:</label>
        <input type="text" id="prenoms" name="prenoms" required><br><br>

        <label for="Fonction">Fonction:</label>
        <input type="text" id="Fonction" name="Fonction" required><br><br>

        <label for="commune">commune:</label>
        <input type="text" id="commune" name="commune" required><br><br>
         <input type="reset" value="Annulé">
        <input type="submit" value="S'inscrire">


    </form>
    </div>
   
</body>
</html>