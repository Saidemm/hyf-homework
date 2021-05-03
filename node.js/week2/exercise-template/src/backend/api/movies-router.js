const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  console.log(movies);
  response.send({ data: [movies] });
});

router.get("/:year", async (request, response) => {
  response.send({ data: movies.filter(movie => movie.year == Number(request.params.year)) })
});



module.exports = router;
