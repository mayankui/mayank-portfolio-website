document.addEventListener("DOMContentLoaded", () => {

    // --- Hamburger Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // Clone Marquee items for seamless infinite scroll
    const marqueeTrack = document.querySelector(".marquee-track");
    if (marqueeTrack) {
        const marqueeContent = marqueeTrack.innerHTML;
        marqueeTrack.innerHTML = marqueeContent + marqueeContent;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-type');
    if (typeof SplitType !== 'undefined') {
        revealElements.forEach((el) => {
            new SplitType(el, { types: 'lines, words' });
            const lines = el.querySelectorAll('.line');
            lines.forEach((line, index) => {
                const words = line.querySelectorAll('.word');
                words.forEach(word => {
                    word.style.transitionDelay = `${index * 0.1}s`;
                });
            });
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-active');
            });
        }, observerOptions);

        revealElements.forEach(el => observer.observe(el));
        document.querySelectorAll('.reveal-block').forEach(el => observer.observe(el));
    }

    // Mouse Parallax Effect for Hero Avatar
    const avatar = document.getElementById('parallax-avatar');
    if (avatar) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
            avatar.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
    }
});
