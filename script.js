document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = Array.from(document.querySelectorAll('main section[id]'));

    const updateNavigation = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar) {
            navbar.classList.toggle('scrolled', currentScroll > 24);
        }

        let activeSectionId = sections.length ? sections[0].id : '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (currentScroll >= sectionTop) {
                activeSectionId = section.id;
            }
        });

        sectionLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${activeSectionId}`;
            link.classList.toggle('active', isActive);

            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    sectionLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');

            if (!targetId || targetId.length < 2) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 84;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('load', updateNavigation);
    updateNavigation();
});
