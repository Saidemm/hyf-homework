const express = require("express");
const app = require("../app");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", (request, response) =>{
    response.send(reviews);
})

router.get("/:id", (req, res) => {
    
    try {
        const reviewId = parseInt(req.params.id);
        if(isNaN(reviewId)) {
            response.status(400).json({error: "Id must be integers."});
            return;
        }
        const reviewById = reviews.find(review => review.id == reviewId);
        if(reviewById) {
            res.json(reviewById)
        } else {
            res.status(404).json({ error: "Id not found"})
        }
    }  catch (error) {
        response.status(500).send({ error: "Internal Server Error." });
    }

})

module.exports = router;