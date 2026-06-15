document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
    });

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        if (navMenu.classList.contains('is-active')) {
            document.body.style.overflow = 'hidden';
            lenis.stop();
        } else {
            document.body.style.overflow = '';
            lenis.start();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('is-active');
            navMenu.classList.remove('is-active');
            document.body.style.overflow = '';
            lenis.start();
        });
    });
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.set(".fade-in-up", { y: 30 })

        .fromTo(".hero-title .word span",
            { y: "110%" },
            {
                y: "0%",
                duration: 1.4,
                stagger: 0.1
            }, "-=0.6"
        )

        .to(".fade-in-up", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15
        }, "-=0.9")

        .fromTo(".hero-visual .fade-in-right", {
            opacity: 0,
            x: 30
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2
        }, "-=1.2");


    const svgTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    svgTl
        .to(".hub", { opacity: 1, scale: 1, duration: 1, delay: 1 })
        .to(".node", {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2
        }, "-=0.5")
        .to(".conn", {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 1,
            stagger: 0.15
        }, "-=0.8");

    gsap.to(".visual-container", {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1
    });
    gsap.registerPlugin(ScrollTrigger);

    const revealElements = document.querySelectorAll('.scroll-reveal');

    revealElements.forEach((el) => {
        gsap.fromTo(el,
            {
                y: 50,
                opacity: 0,
                autoAlpha: 0
            },
            {
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterInput = document.getElementById('newsletterEmail');

    if (newsletterForm && newsletterInput) {

        newsletterInput.addEventListener('input', () => {
            newsletterForm.classList.remove('is-error');
        });

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            newsletterForm.classList.remove('is-error', 'is-success');

            const emailValue = newsletterInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailValue)) {
                newsletterForm.classList.add('is-error');
            } else {
                window.location.href = '404page.html';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        // Global settings:
        disable: 'mobile', // Optional: Acceptable to disable on mobile for performance, or change to 'phone'
        startEvent: 'DOMContentLoaded', // Initializes immediately
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,

        // The "Smooth" Settings:
        offset: 50, // Triggers the animation slightly earlier (50px from bottom)
        delay: 0,
        duration: 800, // 800ms to 1000ms feels expensive and intentional. 400ms feels too rushed.
        easing: 'ease-out-cubic', // This is the magic easing curve. It starts fast and slows down gracefully.
        once: true, // CRITICAL for premium sites: Animations only fire once. Re-animating on scroll-up looks cheap.
        mirror: false, // Don't animate out when scrolling past
        anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });
});