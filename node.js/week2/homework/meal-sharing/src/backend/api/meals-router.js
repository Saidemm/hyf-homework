const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  console.log(meals);
  try {
    const mealId = parseInt(request.params.id);

    if (isNaN(mealId)) {
      response.status(400).json({ error: "Id must be integers." })
      return;
    }

    if (mealId <= meals.length) {
      const mealById = meals.filter((meal) => mealId == meal.id);
      console.log(mealById);
      response.json(mealById[0]);

    } else {
      //response.status(404).json({ error: "Id is not found!" })
      response.send({});
    }

  } catch (error) {
    response.status(500).send({ error: "Internal Server Error." });
  }
})

router.get("/", async (request, response) => {
  try {
    const validQueryParams = ["maxPrice", "title", "createdAfter", "limit"]
    const requestedParameters = Object.keys(request.query)
    const isParamValid = param => validQueryParams.includes(param)

    if (!requestedParameters.every(isParamValid)) {
      response.status(400).send("The requested query does not exist")
      return;
    }


    let filteredMeals = meals;
    if ('maxPrice' in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        response.status(400).json({ error: "maxPrice must be integers." });
        return;
      }
      filteredMeals = filteredMeals.filter(meal => meal.price < maxPrice);
    }
    if ('title' in request.query) {
      const title = request.query.title;

      filteredMeals = filteredMeals.filter(meal => meal.title.toLowerCase().includes((title).toLowerCase()));

    }
    if ('createdAfter' in request.query) {
      const createdAfter = request.query.createdAfter;
      const createdAfterDate = new Date(createdAfter);

      if (!createdAfterDate.getDate()) {
        response.status(400).json({ error: "Date is not valid." });
        return;
      }
      filteredMeals = filteredMeals.filter(meal => new Date(meal.createdAt) > createdAfterDate);
    }

    if ('limit' in request.query) {
      const limit = parseInt(request.query.limit);
      if (isNaN(limit)) {
        response.status(400).json({ error: "limit must be integers." });
        return;
      }
      filteredMeals = filteredMeals.slice(0, limit);
    }
    response.send(filteredMeals);

  } catch (error) {
    response.status(500).send({ error: "Internal Server Error." });
  }

})
module.exports = router;
