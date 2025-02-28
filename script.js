// Função para animar as barras de progresso quando estiverem visíveis
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target;
                const percent = skillFill.getAttribute('data-percent');
                skillFill.style.width = percent + '%';
                skillFill.parentElement.parentElement.classList.add('fade-in-up');
                // Desconecta o observer após animar
                observer.unobserve(skillFill);
            }
        });
    }, { threshold: 0.1 });

    // Observar cada barra de habilidade
    skillFills.forEach(skillFill => {
        observer.observe(skillFill);
    });
}

// Inicializar a animação das barras quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    
    // Código existente para o menu mobile (mantenha-o)
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    if (menuMobile) {
        menuMobile.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
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