const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

function mealsAndReviews() {
  const mealsWithReviews = meals.map((meal) => {
    meal.reviews = reviews.filter((review) =>
      review.mealId === meal.id
    );
    return meal;
  });
  return mealsWithReviews;
}

const allMealsWithReviews = mealsAndReviews();

function cheapMealsGroup() {
  return cheapMeals = allMealsWithReviews.filter((meal) => meal.price < 80);
}

function largeMealsGroup() {
  return largeMeals = allMealsWithReviews.filter((meal) => meal.maxNumberOfGuests >= 6);
}


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.json(allMealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  response.json(cheapMealsGroup());
});

app.get("/large-meals", async (request, response) => {
  response.json(largeMealsGroup());
});

// random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const random = Math.floor(Math.random() * allMealsWithReviews.length);
  response.send(meals[random]);
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) =>{
  const random = Math.floor(Math.random() * reservations.length);
  response.send(reservations[random]);
});

module.exports = app;
