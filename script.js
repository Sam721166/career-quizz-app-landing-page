document.addEventListener('DOMContentLoaded', function () {
    const revealTargets = Array.from(document.querySelectorAll('.grid1-r .grid-h1, .grid1-r .grid-p1'));

    if (revealTargets.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
                target.classList.add('is-visible');
            } else {
                target.classList.remove('is-visible');
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });

    revealTargets.forEach((el, index) => {
        // Optional stagger on appear
        el.style.transitionDelay = (index % 2 === 0) ? '0ms' : '120ms';
        observer.observe(el);
    });
});


