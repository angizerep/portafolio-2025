const contactForm = document.getElementById('contactForm');
const modalOverlay = document.getElementById('thankYouModal');
const modalMessage = document.getElementById('modalMessage');
const modalClose = document.querySelector('.modal-close');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();

    modalMessage.textContent = `Muchas gracias por tu mensaje, ${nombre} ${apellido}. En breve me pondré en contacto contigo.`;

    modalOverlay.style.display = 'flex';

    contactForm.reset();
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

