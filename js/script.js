document.addEventListener('DOMContentLoaded', () => {
    const catalogoLink = document.querySelector('a[href="#catalogo"]');
    const menuLink = document.querySelector('a[href="#menu"]');
    const servicesLink = document.querySelector('a[href="#services"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const heroSection = document.querySelector('.hero');
    const nuevaSection = document.querySelector('#nueva-section');
    const servicesSection = document.querySelector('.services');
    const contactSection = document.querySelector('#contact-section');
    const body = document.querySelector('body');

    // Selecciona el logo por su id
    const logoImg = document.getElementById('logo-img');

    function showSection(sectionToShow) {
        // Ocultar todas las secciones
        heroSection.style.display = 'none';
        nuevaSection.style.display = 'none';
        servicesSection.style.display = 'none';
        contactSection.style.display = 'none';

        // Mostrar la sección correcta
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    }

    // Evento para el enlace 'Catalogo'
    if (catalogoLink) {
        catalogoLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(nuevaSection);

            // Cambiar la imagen del logo al nuevo SVG
            logoImg.src = 'assets/st21 BLANCO.svg';

            // Invertir los colores solo cuando estamos en 'Catalogo'
            body.classList.add('invert-colors');
        });
    }

    // Función para enlaces que NO son 'Catalogo'
    function handleNonCatalogClick(section, logoSrc) {
        return (e) => {
            e.preventDefault();
            showSection(section);

            // Cambiar la imagen del logo a la original u otro valor según la sección
            logoImg.src = logoSrc;

            // Asegurarse de que los colores vuelvan a la normalidad
            body.classList.remove('invert-colors');
        };
    }

    // Evento para el enlace 'Menu'
    if (menuLink) {
        menuLink.addEventListener('click', handleNonCatalogClick(heroSection, 'assets/logostand.png'));
    }

    // Evento para el enlace 'Servicios'
    if (servicesLink) {
        servicesLink.addEventListener('click', handleNonCatalogClick(servicesSection, 'assets/logostand.png'));
    }

    // Evento para el enlace 'Contáctenos'
    if (contactLink) {
        contactLink.addEventListener('click', handleNonCatalogClick(contactSection, 'assets/logostand.png'));
    }
});
