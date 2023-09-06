document.addEventListener('DOMContentLoaded', function () {
    const favoritesButton = document.querySelectorAll('.user-controls button')[1];
    const favoriteSection = document.getElementById('favorite-section');
    console.log(favoriteSection);
    favoritesButton.addEventListener('click', function () {
        if (favoriteSection.style.display === 'block') {
            favoriteSection.style.display = 'none';
        } else {
            favoriteSection.style.display = 'block';
        }
    });
});