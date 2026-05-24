const API_URL = 'http://localhost:8080/api/enseignants';

function initTeacherPage() {
    const teacherForm = document.getElementById('teacherForm');
    const teacherTableBody = document.querySelector('#teacherTable tbody');
    const countTeachers = document.getElementById('countTeachers');
    const countSubjects = document.getElementById('countSubjects');
    const countExperience = document.getElementById('countExperience');

    if (!teacherForm || !teacherTableBody || !countTeachers || !countSubjects || !countExperience) {
        console.error('Éléments manquants dans la page enseignants.');
        return;
    }

    async function loadTeachers() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Erreur serveur ${response.status}`);
            }
            const teachers = await response.json();
            renderTeachers(teachers);
            updateSummary(teachers);
        } catch (error) {
            console.error('Impossible de charger les enseignants :', error);
            alert('Erreur de connexion au serveur enseignant.');
        }
    }

    function renderTeachers(teachers) {
        teacherTableBody.innerHTML = teachers
            .map(teacher => `
                <tr>
                    <td>${teacher.nom}</td>
                    <td>${teacher.prenom}</td>
                    <td>${teacher.matiere}</td>
                    <td>${teacher.experience}</td>
                </tr>
            `)
            .join('');
    }

    function updateSummary(teachers) {
        const subjects = [...new Set(teachers.map(teacher => teacher.matiere.trim()))].filter(Boolean);
        const averageExperience = teachers.length
            ? (teachers.reduce((sum, teacher) => sum + Number(teacher.experience), 0) / teachers.length).toFixed(1)
            : '0';

        countTeachers.textContent = teachers.length;
        countSubjects.textContent = subjects.length;
        countExperience.textContent = averageExperience;
    }

    teacherForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const matiere = document.getElementById('matiere').value.trim();
        const experience = Number(document.getElementById('experience').value.trim());

        if (!nom || !prenom || !matiere || Number.isNaN(experience)) {
            alert('Remplis tous les champs correctement.');
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nom, prenom, matiere, experience })
            });

            if (!response.ok) {
                throw new Error(`Erreur serveur ${response.status}`);
            }

            teacherForm.reset();
            document.getElementById('nom').focus();
            await loadTeachers();
        } catch (error) {
            console.error('Impossible d’ajouter l’enseignant :', error);
            alert('Erreur lors de l’envoi au serveur. Vérifie le backend.');
        }
    });

    loadTeachers();
}

document.addEventListener('DOMContentLoaded', initTeacherPage);
