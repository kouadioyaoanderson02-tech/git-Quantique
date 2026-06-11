function showSection(name, el) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(a => a.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  el.classList.add('active');
  const titles = { profil: 'Mon Profil', voiture: 'Ma Voiture', courses: 'Courses' };
  document.getElementById('pageTitle').textContent = titles[name];
  return false;
}

function sauvegarder(e, type) {
  e.preventDefault();
  let html = '';

  if (type === 'profil') {
    const data = {
      'Nom': document.getElementById('p-nom').value,
      'Prénom': document.getElementById('p-prenom').value,
      'Téléphone': document.getElementById('p-tel').value,
      'Email': document.getElementById('p-email').value,
      'Adresse': document.getElementById('p-adresse').value,
      'Commune': document.getElementById('p-commune').value,
      'Ville': document.getElementById('p-ville').value,
    };
    html = Object.entries(data).map(([k, v]) => v ? `<div class="preview-item"><span>${k}</span><strong>${v}</strong></div>` : '').join('');
    document.getElementById('profil-preview-content').innerHTML = html;
    document.getElementById('profil-preview').style.display = 'block';
    localStorage.setItem('profil', JSON.stringify(data));
  }

  if (type === 'voiture') {
    const data = {
      'Marque': document.getElementById('v-marque').value,
      'Modèle': document.getElementById('v-modele').value,
      'Couleur': document.getElementById('v-couleur').value,
      'Immatriculation': document.getElementById('v-immat').value,
      'Année': document.getElementById('v-annee').value,
      'Statut': document.getElementById('v-statut').value,
      'Places': document.getElementById('v-places').value,
    };
    html = Object.entries(data).map(([k, v]) => v ? `<div class="preview-item"><span>${k}</span><strong>${v}</strong></div>` : '').join('');
    document.getElementById('voiture-preview-content').innerHTML = html;
    document.getElementById('voiture-preview').style.display = 'block';
    localStorage.setItem('voiture', JSON.stringify(data));
  }

  alert('Informations enregistrées avec succès ! ✅');
}

// Restaurer les données sauvegardées
window.addEventListener('DOMContentLoaded', () => {
  const profil = JSON.parse(localStorage.getItem('profil') || '{}');
  if (profil.Nom) {
    document.getElementById('p-nom').value = profil.Nom || '';
    document.getElementById('p-prenom').value = profil['Prénom'] || '';
    document.getElementById('p-tel').value = profil['Téléphone'] || '';
    document.getElementById('p-email').value = profil.Email || '';
    document.getElementById('p-adresse').value = profil.Adresse || '';
    document.getElementById('p-commune').value = profil.Commune || '';
    document.getElementById('p-ville').value = profil.Ville || '';
  }

  const voiture = JSON.parse(localStorage.getItem('voiture') || '{}');
  if (voiture.Marque) {
    document.getElementById('v-marque').value = voiture.Marque || '';
    document.getElementById('v-modele').value = voiture['Modèle'] || '';
    document.getElementById('v-couleur').value = voiture.Couleur || '';
    document.getElementById('v-immat').value = voiture.Immatriculation || '';
    document.getElementById('v-annee').value = voiture['Année'] || '';
    document.getElementById('v-statut').value = voiture.Statut || 'Disponible';
    document.getElementById('v-places').value = voiture.Places || '4';
  }
});

// ===== PIÈCES =====
let pieces = JSON.parse(localStorage.getItem('pieces') || '[]');

function ajouterPiece(e) {
  e.preventDefault();
  const piece = {
    id: Date.now(),
    nom: document.getElementById('piece-nom').value,
    categorie: document.getElementById('piece-categorie').value,
    etat: document.getElementById('piece-etat').value,
    cout: document.getElementById('piece-cout').value,
    date: document.getElementById('piece-date').value,
    next: document.getElementById('piece-next').value,
    note: document.getElementById('piece-note').value,
  };
  pieces.push(piece);
  localStorage.setItem('pieces', JSON.stringify(pieces));
  document.getElementById('pieceForm').reset();
  renderPieces(pieces);
  alert('Pièce ajoutée ! ✅');
}

function supprimerPiece(id) {
  if (!confirm('Supprimer cette pièce ?')) return;
  pieces = pieces.filter(p => p.id !== id);
  localStorage.setItem('pieces', JSON.stringify(pieces));
  renderPieces(pieces);
}

function filtrerPieces(filtre, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = filtre === 'tous' ? pieces : pieces.filter(p => p.etat === filtre);
  renderPieces(filtered);
}

function renderPieces(list) {
  const tbody = document.getElementById('piecesList');
  const empty = document.getElementById('empty-pieces');
  const count = document.getElementById('piece-count');

  count.textContent = `(${pieces.length} pièce${pieces.length > 1 ? 's' : ''})`;

  if (list.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    tbody.innerHTML = list.map(p => `
      <tr>
        <td><strong>${p.nom}</strong>${p.note ? `<br><small style="color:#94a3b8">${p.note}</small>` : ''}</td>
        <td>${p.categorie}</td>
        <td><span class="etat-badge etat-${p.etat.replace(' ','')}">${p.etat}</span></td>
        <td>${p.cout ? Number(p.cout).toLocaleString() + ' FCFA' : '—'}</td>
        <td>${p.date || '—'}</td>
        <td>${p.next || '—'}</td>
        <td><button class="btn-delete-piece" onclick="supprimerPiece(${p.id})"><i class="fa-solid fa-trash"></i></button></td>
      </tr>`).join('');
  }

  // Alertes
  const alertes = pieces.filter(p => {
    const bientot = p.next && new Date(p.next) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    return p.etat === 'À changer' || bientot;
  });
  const alertDiv = document.getElementById('alertes-list');
  alertDiv.innerHTML = alertes.length === 0
    ? '<p style="color:#94a3b8;font-size:0.9rem;">Aucune alerte pour le moment.</p>'
    : alertes.map(p => `
        <div class="alerte-item">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div><strong>${p.nom}</strong> — ${p.etat === 'À changer' ? 'À remplacer' : 'Remplacement prévu le ' + p.next}</div>
        </div>`).join('');
}

// Charger les pièces au démarrage
window.addEventListener('DOMContentLoaded', () => { renderPieces(pieces); });
