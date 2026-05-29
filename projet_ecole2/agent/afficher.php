<?php
require 'connexion.php';

$sql = 'SELECT * FROM agent';
$requete = $pdo->query($sql);
$agents = $requete->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Liste des agents</title>

    <link rel="stylesheet" href="../style.css"/>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>

<body>

    <h1>Liste des agents</h1>

    <table border="3">

        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénoms</th>
            <th>Fonction</th>
            <th>Commune</th>
            <th>Action</th>
        </tr>

        <?php foreach($agents as $agent){ ?>

        <tr>
            <td><?= $agent["id_Agent"]; ?></td>
            <td><?= $agent["nom"]; ?></td>
            <td><?= $agent["prenoms"]; ?></td>
            <td><?= $agent["fonction"]; ?></td>
            <td><?= $agent["commune"]; ?></td>

            <td>
                <a href="modifier.php?id_Agent=<?= $agent['id_Agent']; ?>">
                    <i class="fa-solid fa-pen"></i> Modifier
                </a>

                <a href="supprimé.php?id_Agent=<?= $agent['id_Agent']; ?>">
                    <i class="fa-solid fa-trash"></i> Supprimer
                </a>
            </td>
        </tr>

        <?php } ?>

    </table>

    <br>

    <a href="index.php">
        Ajouter un agent
    </a>

</body>

</html>