const { query } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts");
    response.json(concerts);
    
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  for(key in request.body) {
    if(key !== "title") {
      response.status(400).json({error: `${key} is not supported`});
      return;
    }
  }

  try {
    const result= await knex("concerts").insert(request.body);
    response.json(result);
} catch (error) {
  throw error;
}
});

router.get("/:id", async (request, response) => {

  try {
    
    if ("id" in request.params) {
    const id = parseInt(request.params.id);

    if (isNaN(id)) {
      response.status(400).json({ error: "Id must be integers." })
      return;
    }

      const concerts = await knex("concerts");
      const concertById = concerts.filter((concert) => id == concert.id);
      console.log(concertById);
      response.json(concertById[0]);

    } else {
      //response.status(404).json({ error: "Id is not found!" })
      response.send({});
    }

  } catch (error) {
    console.log(error)
    response.status(500).send({ error: "Internal Server Error." });
  }
});

router.put("/:id", async (request, response) => {

  try {
    
    if ("id" in request.params) {
    const id = parseInt(request.params.id);

    if (isNaN(id)) {
      response.status(400).json({ error: "Id must be integers." })
      return;
    }

      const concerts = await knex("concerts").where({id:id}).update({venue: "Valby"});
      response.json(concerts);

    } else {
     
      response.send({});
    }

  } catch (error) {
    console.log(error)
    response.status(500).send({ error: "Internal Server Error." });
  }
});

router.delete("/:id", async (request, response) => {
  const concertId = parseInt(request.params.id);
  const deleteConcerts = await knex('concerts')
    .delete()
    .where({ id: concertId });
});
module.exports = router;
