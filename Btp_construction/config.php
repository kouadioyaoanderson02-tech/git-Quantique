<?php
/**
 * Configuration & Connexion Base de données BTP Construction
 * Fonctionne avec MySQL (WAMP) et dispose d'un fallback JSON sécurisé
 */

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'btp_construction_db');

function getDBConnection() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }
    
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
        return $pdo;
    } catch (PDOException $e) {
        // En cas d'absence de la base MySQL, retourne null pour activer le fallback fichier
        return null;
    }
}

/**
 * Sauvegarder une demande de devis
 */
function saveDevis($data) {
    $pdo = getDBConnection();
    
    if ($pdo) {
        try {
            $stmt = $pdo->prepare("INSERT INTO devis (nom, email, telephone, type_travaux, surface, budget, delai, description, date_creation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())");
            return $stmt->execute([
                $data['nom'],
                $data['email'],
                $data['telephone'],
                $data['type_travaux'],
                $data['surface'],
                $data['budget'],
                $data['delai'],
                $data['description']
            ]);
        } catch (Exception $e) {
            // Continuer vers fallback
        }
    }
    
    // Fallback fichier JSON local dans le dossier data/
    $dir = __DIR__ . '/data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
    
    $file = $dir . '/devis.json';
    $list = [];
    if (file_exists($file)) {
        $content = file_get_contents($file);
        $list = json_decode($content, true) ?: [];
    }
    
    $data['id'] = count($list) + 1;
    $data['date_creation'] = date('Y-m-d H:i:s');
    $list[] = $data;
    
    return @file_put_contents($file, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

/**
 * Sauvegarder un message de contact
 */
function saveContact($data) {
    $pdo = getDBConnection();
    
    if ($pdo) {
        try {
            $stmt = $pdo->prepare("INSERT INTO contacts (nom, email, telephone, sujet, message, date_creation) VALUES (?, ?, ?, ?, ?, NOW())");
            return $stmt->execute([
                $data['nom'],
                $data['email'],
                $data['telephone'],
                $data['sujet'],
                $data['message']
            ]);
        } catch (Exception $e) {
            // Continuer vers fallback
        }
    }
    
    // Fallback fichier JSON local
    $dir = __DIR__ . '/data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
    
    $file = $dir . '/contacts.json';
    $list = [];
    if (file_exists($file)) {
        $content = file_get_contents($file);
        $list = json_decode($content, true) ?: [];
    }
    
    $data['id'] = count($list) + 1;
    $data['date_creation'] = date('Y-m-d H:i:s');
    $list[] = $data;
    
    return @file_put_contents($file, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}
?>
