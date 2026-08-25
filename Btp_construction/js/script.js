/**
 * BÂTIPRO.CI - SCRIPT JAVASCRIPT
 * Interactions : Simulateur de Devis, Compteurs Animés, WhatsApp Direct, Menu burger & Scroll
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. COMPTEURS DE STATISTIQUES ANIMÉS AU SCROLL
    // =========================================================================
    const counters = document.querySelectorAll('.counter');
    let hasAnimatedCounters = false;

    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1800; // 1.8 secondes
            const startTime = performance.now();

            function updateCount(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Fonction d'accélération/décélération (easeOutQuad)
                const currentVal = Math.floor(progress * (2 - progress) * target);
                counter.textContent = currentVal;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(updateCount);
        });
    }

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimatedCounters) {
                    hasAnimatedCounters = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }


    // =========================================================================
    // 2. SIMULATEUR DE DEVIS BTP EN DIRECT
    // =========================================================================
    const projectTypeSelect = document.getElementById('projectType');
    const surfaceSlider = document.getElementById('surfaceSlider');
    const surfaceDisplay = document.getElementById('surfaceDisplay');
    const finishPills = document.querySelectorAll('.finish-pill');
    const finishRadios = document.querySelectorAll('input[name="finishLevel"]');

    const calcTotalPrice = document.getElementById('calcTotalPrice');
    const calcDuration = document.getElementById('calcDuration');
    const calcSelectedName = document.getElementById('calcSelectedName');
    const sendWhatsAppBtn = document.getElementById('sendWhatsAppEstimate');

    function updateEstimate() {
        if (!projectTypeSelect || !surfaceSlider || !calcTotalPrice) return;

        // Récupération des valeurs
        const baseRate = parseFloat(projectTypeSelect.value) || 150000;
        const selectedOption = projectTypeSelect.options[projectTypeSelect.selectedIndex];
        const projectName = selectedOption.getAttribute('data-name') || 'Projet BTP';
        const surface = parseFloat(surfaceSlider.value) || 150;

        // Récupération de la finition active
        let finishMultiplier = 1.0;
        let finishLabel = 'Standard Clé en Main';
        finishRadios.forEach(radio => {
            if (radio.checked) {
                finishMultiplier = parseFloat(radio.value) || 1.0;
                const parentPill = radio.closest('.finish-pill');
                if (parentPill) {
                    finishLabel = parentPill.querySelector('strong').textContent.trim();
                }
            }
        });

        // Calcul du prix total
        const total = Math.round(surface * baseRate * finishMultiplier);

        // Calcul de la durée estimée en mois
        let minMonths = Math.max(2, Math.round(surface / 40));
        let maxMonths = minMonths + 2;
        if (surface > 500) {
            maxMonths = minMonths + 4;
        }

        // Formatage du prix en FCFA
        const formattedPrice = new Intl.NumberFormat('fr-FR', {
            maximumFractionDigits: 0
        }).format(total) + ' FCFA';

        // Mise à jour de l'affichage dans le DOM
        if (surfaceDisplay) surfaceDisplay.textContent = surface;
        calcTotalPrice.textContent = formattedPrice;
        if (calcDuration) calcDuration.textContent = `${minMonths} à ${maxMonths} mois`;
        if (calcSelectedName) calcSelectedName.textContent = projectName;

        // Mise à jour du lien WhatsApp direct avec les détails du devis
        if (sendWhatsAppBtn) {
            const phone = "2250546348713";
            const message = `Bonjour BâtiPro 👋\nJ'ai simulé mon projet de construction sur votre site :\n\n📌 Type : ${projectName}\n📐 Surface : ${surface} m²\n🏗️ Finition : ${finishLabel}\n💰 Estimation : ${formattedPrice}\n⏱️ Durée estimée : ~ ${minMonths} à ${maxMonths} mois\n\nJ'aimerais échanger avec un conseiller technique. Merci !`;
            sendWhatsAppBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        }
    }

    // Écouteurs d'événements pour le simulateur
    if (projectTypeSelect) {
        projectTypeSelect.addEventListener('change', updateEstimate);
    }

    if (surfaceSlider) {
        surfaceSlider.addEventListener('input', updateEstimate);
    }

    finishPills.forEach(pill => {
        pill.addEventListener('click', () => {
            finishPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const radio = pill.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
            updateEstimate();
        });
    });

    updateEstimate();


    // =========================================================================
    // 3. MENU HAMBURGER MOBILE
    // =========================================================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }


    // =========================================================================
    // 4. GESTION DU LIEN ACTIF AU SCROLL
    // =========================================================================
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 130;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });


    // =========================================================================
    // 5. BOUTON RETOUR EN HAUT (BACK TO TOP)
    // =========================================================================
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // =========================================================================
    // 6. TRAITEMENT DU FORMULAIRE DE CONTACT
    // =========================================================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim() || 'Non renseigné';
            const subject = document.getElementById('subject').value;

            alert(`✅ Demande envoyée avec succès !\n\nMerci ${name}.\nNotre équipe BâtiPro a bien reçu votre demande concernant : « ${subject} ».\nUne réponse vous sera envoyée à : ${email}\net notre équipe vous joindra au : ${phone}.\nEmail du destinataire BâtiPro : kouadioyaoanderson02@gmail.com`);
            
            contactForm.reset();
        });
    }
});
