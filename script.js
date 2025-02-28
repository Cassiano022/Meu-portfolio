document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Fechar o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Ajustar header ao rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});