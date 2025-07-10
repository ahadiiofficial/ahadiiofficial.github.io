// 🌙🌞 Light/Dark Mode Toggle
const toggleBtn = document.getElementById("mode-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Change the icon when toggled
        toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
}

// 🔁 Section Animation on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate once
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
