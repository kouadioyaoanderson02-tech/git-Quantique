<?php
 require 'connexion.php';
$id_Agent = $_GET['id_Agent'];
$sql = "DELETE FROM agent WHERE id_Agent =:id_Agent";
$requete = $pdo->prepare($sql);
$requete->execute([':id_Agent' => $id_Agent]);
echo 'Supression éffectué avec succes';





?>