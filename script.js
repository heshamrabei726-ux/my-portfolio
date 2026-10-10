
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neutral: {
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                }
            }
        }
    }
};

function applyTheme() {
    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
        (localStorage.getItem('theme') !== 'light' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    return isDarkMode;
}

const initialDarkMode = applyTheme();

// Theme Toggle Script
function toggleTheme() {
    const htmlElement = document.documentElement;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (initialDarkMode) {
        document.getElementById('moon-icon').classList.add('hidden');
        document.getElementById('sun-icon').classList.remove('hidden');
    } else {
        document.getElementById('moon-icon').classList.remove('hidden');
        document.getElementById('sun-icon').classList.add('hidden');
    }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



   // Generic Intersection Observer for all elements


 // Smooth Intersection Observer
const animatedElements = document.querySelectorAll(
    'section, div, h1, h2, h3, h4, p, a, button, img, svg'
);

animatedElements.forEach(el => {
    el.classList.add(
        'transition-all',
        'duration-700',
        'ease-in-out',
        'opacity-0',
        'translate-y-10'
    );
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;

        if (entry.isIntersecting) {
            // العنصر ظهر: شغّل أنيميشن الدخول
            el.classList.remove('opacity-0', 'translate-y-10');
            el.classList.add('opacity-100', 'translate-y-0');
        } else {
            // العنصر خرج من الشاشة: جهّزه للأنيميشن التالي
            el.classList.remove('opacity-100', 'translate-y-0');
            el.classList.add('opacity-0', 'translate-y-10');
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(el => observer.observe(el));


