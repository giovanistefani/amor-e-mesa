import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { Gallery } from './components/Gallery.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');

// Render Components
app.innerHTML = `
    ${Header()}
    <main>
        ${Hero()}
        ${About()}
        ${Services()}
        ${Gallery()}
        ${Contact()}
    </main>
    ${Footer()}
`;

// Scroll Reveal Logic with Intersection Observer
const setupReveal = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
};

// Initialize after content is loaded
document.addEventListener('DOMContentLoaded', setupReveal);

// Fallback for immediate check
setupReveal();
