document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne toutes les progress-bars
    const progressBars = document.querySelectorAll('.progress-bar');

    // Parcourt chaque progress-bar et anime la largeur
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage'); // Récupère le pourcentage à atteindre
        const progress = bar.querySelector('.progress'); // Sélectionne l'élément .progress

        // Initialiser la largeur à 0% pour l'animation
        progress.style.width = '0%';

        // Utilisation d'un timeout pour déclencher l'animation avec un petit décalage
        setTimeout(() => {
            progress.style.width = percentage + '%'; // Applique la largeur en fonction du pourcentage
        }, 800); // Le délai avant que l'animation commence
    });
});