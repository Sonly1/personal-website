const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const movies = [
    { id: 1, title: "Inception", director: "Christopher Nolan" },
    { id: 2, title: "Dune Part II", director: "Denis Villeneuve" },
    { id: 3, title: "Tenet", director: "Christopher Nolan" }, 
    {id: 4, title: "Lord Of The Ring", director: "Peter Jackson"}
];

// API endpoint to get all movies
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});