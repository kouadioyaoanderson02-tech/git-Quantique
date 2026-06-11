// Mise à jour résumé en temps réel
document.getElementById('depart').addEventListener('input', function() {
  document.getElementById('r-depart').textContent = this.value || '—';
});
document.getElementById('destination').addEventListener('input', function() {
  document.getElementById('r-dest').textContent = this.value || '—';
});

document.querySelectorAll('input[name="type"]').forEach(r => {
  r.addEventListener('change', function() {
    const prix = { express: '1 500', reservation: '2 000', partage: '800', business: '3 500' };
    document.getElementById('r-type').textContent = this.value;
    document.getElementById('r-prix').textContent = (prix[this.value] || '1 500') + ' FCFA';
  });
});

function passerCommande(e) {
  e.preventDefault();
  const modal = document.getElementById('modal');
  modal.classList.add('show');
  modal.style.display = 'flex';
}
