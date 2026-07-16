(() => {
    "use strict";

    const button = document.getElementById("totop");
    if (!button) return;

    const updateVisibility = () => {
        button.classList.toggle("visible", window.scrollY > 300);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
})();
