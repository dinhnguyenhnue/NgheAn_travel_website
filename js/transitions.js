document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial page entrance
    gsap.to('body', {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Staggered reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Premium Micro-animations for cards
    const cards = document.querySelectorAll('.heritage-card, .museum-card, .food-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                scale: 1.02,
                boxShadow: '0 30px 60px -12px rgba(124,0,14,0.15)',
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: '0 0px 0px rgba(0,0,0,0)',
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // Page Wipe Transition
    const links = document.querySelectorAll('a');
    const overlay = document.getElementById('page-overlay');

    links.forEach(link => {
        const href = link.getAttribute('href');
        // Only internal html links
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const tl = gsap.timeline({
                    onComplete: () => {
                        window.location.href = href;
                    }
                });

                tl.to(overlay, {
                    x: '0%',
                    duration: 0.6,
                    ease: 'power4.inOut'
                });
            });
        }
    });

    // Animate Hero text on load
    const heroText = document.querySelectorAll('h1, header p, header .flex');
    if (heroText.length > 0) {
        gsap.from(heroText, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'expo.out',
            delay: 0.2
        });
    }
});
