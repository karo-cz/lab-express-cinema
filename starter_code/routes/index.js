const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (request, respond, next) => {
  Movie.find({})
    .then(movieFile => {
      // respond.send(movieFile);
      respond.render("movies.hbs", { movieList: movieFile });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:id", (request, response, next) => {
  Movie.findById(request.params.id)
    .then(movieFile => {
      response.render("movieDetails.hbs", movieFile);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
