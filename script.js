// 🌙🌞 Light/Dark Mode Toggle
const toggleBtn = document.getElementById("mode-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Icon change 🌙 <-> 🌞
        toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
}

// 🔁 Scroll-based Section Animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // only animate once
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
