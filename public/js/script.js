// Agregar funcionalidad al acordeón
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    const content = item.querySelector('.accordion-content');

    // Establecer inicialmente el contenido como visible
    content.style.display = 'block';

    button.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
