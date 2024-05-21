const movies = [
    { id: 1, title: "Inception", director: "Christopher Nolan" },
    { id: 2, title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski" },
    { id: 3, title: "Interstellar", director: "Christopher Nolan" }
];

document.addEventListener("DOMContentLoaded", () => {
    const getMoviesButton = document.getElementById('get-movies');
    const moviesList = document.getElementById('movies-list');

    getMoviesButton.addEventListener('click', () => {
        moviesList.innerHTML = '';
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = `${movie.title} by ${movie.director}`;
            moviesList.appendChild(listItem);
        });
    });
});