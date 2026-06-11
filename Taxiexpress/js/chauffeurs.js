const chauffeurs = [
  { id:1, nom:'Koné Mamadou',      note:4.9, courses:320, dispo:'Disponible', temps:'2 min', zone:'Cocody',    vehicule:'Toyota Corolla Blanc',   tel:'+225 07 11 22 33 44' },
  { id:2, nom:'Traoré Seydou',     note:4.7, courses:215, dispo:'Disponible', temps:'4 min', zone:'Plateau',   vehicule:'Peugeot 301 Gris',        tel:'+225 05 22 33 44 55' },
  { id:3, nom:'Bamba Ibrahima',    note:4.8, courses:410, dispo:'Disponible', temps:'6 min', zone:'Yopougon',  vehicule:'Honda Civic Noir',         tel:'+225 07 33 44 55 66' },
  { id:4, nom:'Coulibaly Adama',   note:4.6, courses:180, dispo:'En course',  temps:'—',     zone:'Marcory',   vehicule:'Renault Logan Blanc',      tel:'+225 05 44 55 66 77' },
  { id:5, nom:'Diallo Moussa',     note:5.0, courses:520, dispo:'Disponible', temps:'3 min', zone:'Abobo',     vehicule:'Toyota Yaris Blanc',       tel:'+225 07 55 66 77 88' },
  { id:6, nom:'Ouattara Karim',    note:4.5, courses:145, dispo:'En course',  temps:'—',     zone:'Cocody',    vehicule:'Hyundai i10 Bleu',         tel:'+225 05 66 77 88 99' },
];

function renderChauffeurs(list) {
  const grid = document.getElementById('chauffeursGrid');
  document.getElementById('nbTotal').textContent = chauffeurs.length;
  document.getElementById('nbDispo').textContent = chauffeurs.filter(c => c.dispo === 'Disponible').length;

  grid.innerHTML = list.map(c => `
    <div class="chauffeur-card">
      <div class="chauffeur-avatar"><i class="fa-solid fa-user-tie"></i></div>
      <div class="chauffeur-info">
        <h3>${c.nom}</h3>
        <p class="chauffeur-vehicule"><i class="fa-solid fa-car"></i> ${c.vehicule}</p>
        <p class="chauffeur-zone"><i class="fa-solid fa-location-dot"></i> ${c.zone}</p>
        <div class="chauffeur-meta">
          <span class="note-badge">⭐ ${c.note}</span>
          <span class="courses-badge"><i class="fa-solid fa-route"></i> ${c.courses} courses</span>
          <span class="dispo-badge ${c.dispo === 'Disponible' ? 'dispo' : 'encourse'}">${c.dispo}</span>
        </div>
        ${c.dispo === 'Disponible' ? `<p class="temps-arrivee"><i class="fa-solid fa-clock"></i> Arrivée estimée : <strong>${c.temps}</strong></p>` : ''}
      </div>
      <div class="chauffeur-actions">
        ${c.dispo === 'Disponible'
          ? `<a href="commander.html" class="btn-primary" style="text-decoration:none;padding:10px 18px;font-size:0.9rem;"><i class="fa-solid fa-taxi"></i> Choisir</a>`
          : `<button class="btn-indispo" disabled>En course</button>`
        }
        <a href="tel:${c.tel}" class="btn-call"><i class="fa-solid fa-phone"></i></a>
      </div>
    </div>
  `).join('');
}

function filtrerChauffeurs() {
  const search = document.getElementById('searchChauffeur').value.toLowerCase();
  const note   = parseFloat(document.getElementById('filterNote').value) || 0;
  const dispo  = document.getElementById('filterDispo').value;

  const filtered = chauffeurs.filter(c =>
    c.nom.toLowerCase().includes(search) &&
    c.note >= note &&
    (dispo === '' || c.dispo === dispo)
  );
  renderChauffeurs(filtered);
}

function switchTab(tab, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  btn.classList.add('active');
}

function inscrireChauffeur(e) {
  e.preventDefault();
  const zone = document.getElementById('c-zone').value === 'autre'
    ? document.getElementById('c-zone-custom').value
    : document.getElementById('c-zone').value;
  alert(`Candidature envoyée ! Zone : ${zone}. Notre équipe vous contactera dans 24h. 🚕`);
  e.target.reset();
  document.getElementById('zone-custom').style.display = 'none';
  switchTab('liste', document.querySelectorAll('.tab-btn')[0]);
}

renderChauffeurs(chauffeurs);

// Afficher le champ ville personnalisée
document.getElementById('c-zone').addEventListener('change', function() {
  const custom = document.getElementById('zone-custom');
  custom.style.display = this.value === 'autre' ? 'block' : 'none';
  document.getElementById('c-zone-custom').required = this.value === 'autre';
});

// Afficher le champ expérience personnalisée
function toggleExpCustom() {
  const val    = document.getElementById('c-exp').value;
  const custom = document.getElementById('exp-custom');
  custom.style.display = val === 'autre' ? 'block' : 'none';
  document.getElementById('c-exp-custom').required = val === 'autre';
}
