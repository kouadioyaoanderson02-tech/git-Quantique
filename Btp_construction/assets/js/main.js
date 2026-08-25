/**
 * BTP & CONSTRUCTION - SCRIPTS JAVASCRIPT
 * Gestion de l'interactivité, calculateur de devis, filtres de projets et modale
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Active Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 3. Project Filter System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Interactive Cost Estimator / Simulator
  const calcType = document.getElementById('calcType');
  const calcSurface = document.getElementById('calcSurface');
  const calcRange = document.getElementById('calcRange');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcDurationDisplay = document.getElementById('calcDurationDisplay');

  function calculateEstimate() {
    if (!calcType || !calcSurface || !calcPriceDisplay) return;

    const typeRate = parseFloat(calcType.value) || 1200; // Prix moyen au m² selon le type
    const surface = parseFloat(calcSurface.value) || 100;
    const rangeMultiplier = parseFloat(calcRange ? calcRange.value : 1.0) || 1.0;

    // Calcul de base : Surface x Taux x Multiplicateur gamme
    let basePrice = surface * typeRate * rangeMultiplier;

    // Durée estimée en mois
    let months = Math.ceil(surface / 35);
    if (months < 1) months = 1;

    // Formatage en FCFA / EUR
    const formattedPrice = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0
    }).format(basePrice).replace('XOF', 'FCFA');

    calcPriceDisplay.textContent = formattedPrice;
    if (calcDurationDisplay) {
      calcDurationDisplay.textContent = `~ ${months} à ${months + 2} mois`;
    }
  }

  if (calcType && calcSurface) {
    calcType.addEventListener('change', calculateEstimate);
    calcSurface.addEventListener('input', calculateEstimate);
    if (calcRange) calcRange.addEventListener('change', calculateEstimate);
    calculateEstimate();
  }

  // 5. Project Details Modal (Lightbox)
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalLocation = document.getElementById('modalLocation');
  const modalYear = document.getElementById('modalYear');
  const modalImg = document.getElementById('modalImg');

  const projectDetails = {
    1: {
      title: "Résidence Moderne Les Palmiers",
      category: "Gros Œuvre & Bâtiment",
      location: "Abidjan - Cocody",
      year: "2024",
      desc: "Construction clé en main d'un complexe résidentiel de haut standing comprenant 12 appartements de luxe, piscine, parking souterrain et espaces verts paysagers.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230f2b48'/><path d='M100 450 L100 150 L350 150 L350 450 Z M400 450 L400 100 L700 100 L700 450 Z' fill='%231b4974'/><text x='400' y='270' font-family='Arial' font-size='28' fill='%23ffffff' text-anchor='middle' font-weight='bold'>RÉSIDENCE LES PALMIERS</text><text x='400' y='310' font-family='Arial' font-size='18' fill='%23f57c00' text-anchor='middle'>BÂTIMENT R+4 HAUT STANDING</text></svg>"
    },
    2: {
      title: "Pont & Voirie Urbaine du Littoral",
      category: "Travaux Publics & VRD",
      location: "San-Pédro",
      year: "2023 - 2024",
      desc: "Aménagement d'une route express de 14 km avec bitumage lourd, assainissement fluvial, éclairage public solaire et construction d'un pont en béton précontraint.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%231e293b'/><path d='M50 400 Q400 200 750 400' stroke='%23f57c00' stroke-width='14' fill='none'/><text x='400' y='260' font-family='Arial' font-size='28' fill='%23ffffff' text-anchor='middle' font-weight='bold'>PONT & VOIRIE URBAINE</text><text x='400' y='300' font-family='Arial' font-size='18' fill='%23f57c00' text-anchor='middle'>TRAVAUX PUBLICS & VRD</text></svg>"
    },
    3: {
      title: "Centre Commercial & Tour d'Affaires",
      category: "Génie Civil & Commercial",
      location: "Plateau d'Affaires",
      year: "2023",
      desc: "Structure mixte acier/béton armé pour un centre commercial de 8 000 m² avec galeries marchandes, bureaux vitrés, climatisation centrale et normes HQE.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230a1b2d'/><rect x='200' y='80' width='400' height='370' fill='%231b4974'/><text x='400' y='250' font-family='Arial' font-size='28' fill='%23ffffff' text-anchor='middle' font-weight='bold'>TOUR & CENTRE COMMERCIAL</text><text x='400' y='290' font-family='Arial' font-size='18' fill='%23f57c00' text-anchor='middle'>GÉNIE CIVIL INDUSTRIEL</text></svg>"
    },
    4: {
      title: "Rénovation Villa Historique",
      category: "Rénovation & Aménagement",
      location: "Grand-Bassam",
      year: "2024",
      desc: "Réhabilitation complète avec renforcement des structures porteuses, isolation thermique moderne, réfection de la toiture en tuiles et aménagement intérieur contemporain.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%232c3e50'/><polygon points='200,250 400,120 600,250' fill='%23f57c00'/><rect x='220' y='250' width='360' height='200' fill='%23ffffff'/><text x='400' y='330' font-family='Arial' font-size='26' fill='%230f2b48' text-anchor='middle' font-weight='bold'>RÉNOVATION PATRIMOINE</text></svg>"
    },
    5: {
      title: "Entrepôt Logistique & Plateforme Fret",
      category: "Génie Civil & Industriel",
      location: "Zone Industrielle Yopougon",
      year: "2023",
      desc: "Construction d'un hangar industriel à haute portée libre de 4 500 m², dalle industrielle haute résistance au poinçonnement et quais de déchargement automatisés.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230f172a'/><path d='M100 450 L100 200 L700 200 L700 450 Z' fill='%23334155'/><text x='400' y='310' font-family='Arial' font-size='28' fill='%23ffffff' text-anchor='middle' font-weight='bold'>ENTREPÔT LOGISTIQUE 4500m²</text></svg>"
    },
    6: {
      title: "Château d'Eau & Réseau Hydraulique",
      category: "Travaux Publics & VRD",
      location: "Yamoussoukro",
      year: "2024",
      desc: "Ouvrage de génie civil hydraulique : réservoir surélevé en béton armé de 500 m³ et pose de 25 km de canalisations d'adduction d'eau potable.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230f2b48'/><ellipse cx='400' cy='180' rx='140' ry='70' fill='%230284c7'/><rect x='360' y='180' width='80' height='270' fill='%23e2e8f0'/><text x='400' y='330' font-family='Arial' font-size='24' fill='%23ffffff' text-anchor='middle' font-weight='bold'>CHÂTEAU D'EAU & HYDRAULIQUE</text></svg>"
    }
  };

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-id');
      const data = projectDetails[pId];

      if (data && modal) {
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalDesc.textContent = data.desc;
        modalLocation.textContent = data.location;
        modalYear.textContent = data.year;
        modalImg.src = data.img;
        modal.classList.add('active');
      }
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // 6. Smooth Quick Fill from Hero to Estimator
  const quickDevisBtn = document.getElementById('heroQuickDevisBtn');
  if (quickDevisBtn) {
    quickDevisBtn.addEventListener('click', (e) => {
      const heroType = document.getElementById('heroType');
      const heroSurface = document.getElementById('heroSurface');
      if (heroType && calcType) calcType.value = heroType.value;
      if (heroSurface && calcSurface) calcSurface.value = heroSurface.value;
      calculateEstimate();
    });
  }
});
