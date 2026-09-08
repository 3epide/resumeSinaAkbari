const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");
const toggle = document.getElementById("languageToggle")

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active")
    });
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");


})
function getTranslation(object, path) {
    return path.split(".").reduce((result, key) => {
        return result?.[key];
    }, object)
}
function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.dataset.i18n;
        const translation = getTranslation(
            translations[language],
            key
        );
        if (translation) {
            element.textContent = translation;

        }
    });
    // document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
}
let currentLanguage = "en";
const languageToggle = document.getElementById("languageToggle");
languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "fa" : "en";

    changeLanguage(currentLanguage)
});


