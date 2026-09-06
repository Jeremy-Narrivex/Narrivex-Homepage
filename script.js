document.addEventListener('DOMContentLoaded', () => {
    const analyticsConsentKey = 'narrivex-analytics-consent';
    const navbar = document.getElementById('navbar');
    const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const consentBanner = document.getElementById('consent-banner');
    const acceptAnalytics = document.getElementById('accept-analytics');
    const rejectAnalytics = document.getElementById('reject-analytics');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let sessionAnalyticsConsent = null;
    const isStorageUnavailable = error => error.name === 'SecurityError' || error.name === 'QuotaExceededError';

    const getAnalyticsConsent = () => {
        try {
            return localStorage.getItem(analyticsConsentKey);
        } catch (error) {
            if (!isStorageUnavailable(error)) {
                throw error;
            }

            return sessionAnalyticsConsent;
        }
    };

    const saveAnalyticsConsent = consent => {
        sessionAnalyticsConsent = consent;

        try {
            localStorage.setItem(analyticsConsentKey, consent);
        } catch (error) {
            if (!isStorageUnavailable(error)) {
                throw error;
            }
        }
    };

    const loadAnalytics = () => {
        if (document.getElementById('google-analytics')) {
            return;
        }

        const analyticsScript = document.createElement('script');
        analyticsScript.id = 'google-analytics';
        analyticsScript.async = true;
        analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-T9KJRGGKFY';
        document.head.append(analyticsScript);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'G-T9KJRGGKFY');
    };

    const setAnalyticsConsent = consent => {
        consentBanner.hidden = true;
        saveAnalyticsConsent(consent);

        if (consent === 'accepted') {
            loadAnalytics();
        }
    };

    if (new URLSearchParams(window.location.search).has('privacy-settings')) {
        sessionAnalyticsConsent = null;

        try {
            localStorage.removeItem(analyticsConsentKey);
        } catch (error) {
            if (!isStorageUnavailable(error)) {
                throw error;
            }
        }

        window.history.replaceState({}, '', window.location.pathname);
    }

    const analyticsConsent = getAnalyticsConsent();

    if (analyticsConsent === 'accepted') {
        loadAnalytics();
    } else if (!analyticsConsent) {
        consentBanner.hidden = false;
    }

    acceptAnalytics.addEventListener('click', () => setAnalyticsConsent('accepted'));
    rejectAnalytics.addEventListener('click', () => setAnalyticsConsent('rejected'));

    document.querySelectorAll('[data-analytics-event]').forEach(element => {
        element.addEventListener('click', () => {
            if (getAnalyticsConsent() === 'accepted') {
                window.gtag('event', element.dataset.analyticsEvent);
            }
        });
    });

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
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
            });
        });
    });

    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('load', updateNavigation);
    updateNavigation();
});
