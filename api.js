document.addEventListener('DOMContentLoaded', () => {
    const getMoviesButton = document.getElementById('get-movies');
    const moviesList = document.getElementById('movies-list');

    getMoviesButton.addEventListener('click', () => {
        // Replace with your GitHub Pages URL
        fetch('https://sonly1.github.io/personal-website/movies.json')
            .then(response => response.json())
            .then(data => {
                moviesList.innerHTML = '';
                data.forEach(movie => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${movie.title} - ${movie.director}`;
                    moviesList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                const errorItem = document.createElement('li');
                errorItem.textContent = 'Error fetching movies';
                moviesList.appendChild(errorItem);
            });
    });
});