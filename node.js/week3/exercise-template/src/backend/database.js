require("dotenv").config();
const knex = require("knex")
const config = require("../../knexfile")

// create connection
let db;
if (process.env.NODE_ENV === "test") {
  db = knex(config.test)
} else {
  db = knex(config.development)
  // Check that the connection works
  db.raw("SELECT VERSION()").then((result) => {
    console.log(`connection to knex was successful! DB version is: ${result[0][0]["VERSION()"]}`);
  });
}

module.exports = db;
