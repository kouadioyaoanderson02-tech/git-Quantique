<?php

require 'connexion.php';

if(isset($_POST['nom'])){

    $nom = $_POST['nom'];
    $prenoms = $_POST['prenoms'];
    $commune = $_POST['commune'];
    $fonction = $_POST['fonction'];

    $sql = "INSERT INTO agent(nom, prenoms, commune, fonction)
            VALUES(:nom, :prenoms, :commune, :fonction)";

    $requete = $pdo->prepare($sql);

    $requete->execute([
        'nom' => $nom,
        'prenoms' => $prenoms,
        'commune' => $commune,
        'fonction' => $fonction
    ]);

    echo "Agent enregistré avec succès";

}

?>