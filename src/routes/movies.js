const { Router } = require('express');
const _ = require('underscore');
const router = Router();

const movies = require("../sample.json");

//Routes 
router.get('/', (req, res) => {
    const data = movies;
    res.json(data)
});

router.post('/new', (req, res) => {
    const { tittle, author, year, rating } = req.body;
    if (tittle && author && year && rating){
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie);
        res.status(200).json(movies);
    } else {
        res.status(500).json({Status:{code: 8000, message:"wrong request"}});
    }
    res.json("received")
});

router.delete('/del/:id', (req, res) => {
    const { id } = req.body;
    console.log(id); 
    _.each(movies, (movie, i)=>{
        if (movie.id == id){
            movies.splice(i);
        }
    })
    res.json(movies)
});

module.exports = router;