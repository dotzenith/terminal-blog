(() => {
    "use strict";

    const storageKey = "theme";
    const root = document.documentElement;
    const body = document.body;

    const preferredTheme = () => {
        const saved = localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark") return saved;

        const configured = body.dataset.theme;
        if (configured === "light" || configured === "dark") return configured;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const applyTheme = (theme) => {
        root.classList.toggle("dark", theme === "dark");
        root.classList.toggle("light", theme === "light");
        root.style.colorScheme = theme;
    };

    applyTheme(preferredTheme());
    requestAnimationFrame(() => body.classList.remove("notransition"));

    window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("mode")?.addEventListener("click", () => {
            const next = root.classList.contains("dark") ? "light" : "dark";
            localStorage.setItem(storageKey, next);
            applyTheme(next);
        });
    });
})();
