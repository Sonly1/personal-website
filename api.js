const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const movies = [
    { id: 1, title: "Inception", director: "Christopher Nolan" },
    { id: 2, title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski" },
    { id: 3, title: "Interstellar", director: "Christopher Nolan" }
];

// API endpoint to get all movies
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});