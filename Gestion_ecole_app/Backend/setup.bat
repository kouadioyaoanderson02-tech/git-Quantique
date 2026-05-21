@echo off
REM Script pour télécharger le driver MySQL et compiler le backend

echo ===================================
echo Téléchargement du driver MySQL...
echo ===================================

REM Créer un dossier lib s'il n'existe pas
if not exist "lib" mkdir lib

REM Télécharger le driver (cette URL peut nécessiter une mise à jour)
echo Téléchargement de mysql-connector-java-8.0.33.jar...
powershell -Command "Invoke-WebRequest -Uri 'https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.33.zip' -OutFile 'mysql-driver.zip' -ErrorAction SilentlyContinue"

if exist "mysql-driver.zip" (
    echo Extraction du driver...
    powershell -Command "Expand-Archive 'mysql-driver.zip' -DestinationPath 'mysql-extracted' -ErrorAction SilentlyContinue"
    REM Copier le JAR au bon endroit
    copy mysql-extracted\mysql-connector-java-8.0.33\mysql-connector-java-8.0.33.jar lib\mysql-connector-java-8.0.33.jar
    del mysql-driver.zip
    rmdir /s /q mysql-extracted
    echo ✓ Driver téléchargé et extrait !
) else (
    echo ! Le téléchargement a échoué. Télécharge manuellement le JAR.
    echo ! Visite : https://dev.mysql.com/downloads/connector/j/
)

echo.
echo ===================================
echo Compilation de la connexion...
echo ===================================

if exist "lib\mysql-connector-java-8.0.33.jar" (
    javac -cp lib\mysql-connector-java-8.0.33.jar ConnexionDB.java
    echo ✓ Compilation réussie !
    echo.
    echo Test de la connexion...
    java -cp .\;lib\mysql-connector-java-8.0.33.jar ConnexionDB
) else (
    echo ✗ Le driver MySQL n'a pas pu être téléchargé ou trouvé.
    echo Télécharge manuellement depuis : https://dev.mysql.com/downloads/connector/j/
    echo Place le fichier JAR dans le dossier Backend/lib/
)

pause
