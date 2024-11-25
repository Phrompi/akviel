// Récupère tous les boutons et contenus des onglets
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Ajoute un gestionnaire d'événements sur chaque bouton
tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Désactive tous les boutons et contenus
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        // Active le bouton et le contenu associés
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});
