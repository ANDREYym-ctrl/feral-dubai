export function initScrollAnimations() {
    const elements = document.querySelectorAll(".fade-in-section");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observerInstance.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
}