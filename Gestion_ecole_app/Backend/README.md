# Backend Gestion École

## Objectif
Ce backend Java utilise MySQL pour stocker les étudiants et démarre un service HTTP sur `http://localhost:8080`.

## Pré-requis
- MySQL installé et en cours d’exécution sur `localhost:3306`
- Java 17
- Maven

## Étapes pour lancer

1. Ouvrir PowerShell dans `Gestion_ecole_app/Backend`
2. Lancer le serveur Java avec Maven :

```powershell
mvn clean compile exec:java
```

3. Si tout est correct, le serveur va :
- créer la base `database_db` si elle n’existe pas
- créer les tables `etudiants` et `enseignants` si elles n’existent pas
- démarrer l’API REST sur :
  - `http://localhost:8080/api/etudiants`
  - `http://localhost:8080/api/enseignants`

## Test de connexion
Si tu veux juste tester la connexion MySQL :

```powershell
javac -cp "lib/mysql-connector-java-8.0.33.jar" ConnexionDB.java
java -cp ".;lib/mysql-connector-java-8.0.33.jar" ConnexionDB
```

## Notes
- Le code Java se connecte en utilisant `root` sans mot de passe.
- Si tu utilises un mot de passe différent, modifie `DB_PASSWORD` dans `Server.java` et `ConnexionDB.java`.
