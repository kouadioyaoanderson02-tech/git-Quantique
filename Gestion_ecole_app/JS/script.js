const API_URL = 'http://localhost:8080/api/etudiants';

function initStudentPage() {
    const studentForm = document.getElementById('studentForm');
    const studentTableBody = document.querySelector('#studentTable tbody');
    const countStudents = document.getElementById('countStudents');
    const countClasses = document.getElementById('countClasses');
    const countAverage = document.getElementById('countAverage');

    if (!studentForm || !studentTableBody || !countStudents || !countClasses || !countAverage) {
        console.error('Éléments du DOM manquants pour la page des étudiants.');
        return;
    }

    async function loadStudents() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Erreur serveur ${response.status}`);
            }
            const students = await response.json();
            renderStudents(students);
            updateSummary(students);
        } catch (error) {
            console.error('Impossible de charger les étudiants :', error);
        }
    }

    function renderStudents(students) {
        studentTableBody.innerHTML = students
            .map(student => `
                <tr>
                    <td>${student.nom}</td>
                    <td>${student.prenom}</td>
                    <td>${student.age}</td>
                    <td>${student.classe}</td>
                </tr>
            `)
            .join('');
    }

    function updateSummary(students) {
        const classesList = [...new Set(students.map(student => student.classe))];
        const averageAge = students.length
            ? (students.reduce((sum, student) => sum + Number(student.age), 0) / students.length).toFixed(1)
            : '0';

        countStudents.textContent = students.length;
        countClasses.textContent = classesList.length;
        countAverage.textContent = averageAge;
    }

    studentForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const age = Number(document.getElementById('age').value.trim());
        const classe = document.getElementById('classe').value.trim();

        if (!nom || !prenom || !age || !classe) {
            alert('Remplis tous les champs avant d’envoyer.');
            return;
        }

        const newStudent = { nom, prenom, age, classe };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStudent)
            });

            if (!response.ok) {
                throw new Error(`Erreur serveur ${response.status}`);
            }

            studentForm.reset();
            document.getElementById('nom').focus();
            await loadStudents();
        } catch (error) {
            console.error('Impossible d’ajouter l’étudiant :', error);
            alert('Erreur lors de l’envoi. Vérifie le serveur backend.');
        }
    });

    loadStudents();
}

document.addEventListener('DOMContentLoaded', initStudentPage);