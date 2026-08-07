// Sticky nav shadow on scroll
const nav = document.getElementById('site-nav');
if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

// Fade-up reveal for sections as they enter the viewport
const revealTargets = document.querySelectorAll('.reveal');
if (revealTargets.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealTargets.forEach((el) => observer.observe(el));
} else {
    revealTargets.forEach((el) => el.classList.add('in-view'));
}
