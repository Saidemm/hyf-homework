const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", (request, response) =>{
    response.send(reservations);
})

router.get("/:id", (request, response)=>{
    try {
        const reservationId = parseInt(request.params.id);

        if(isNaN(reservationId)) {
            response.status(400).json({error: "Id must be integers."});
            return;
        }

        if(reservationId <= reservations.length) {
            const reservationById = reservations.filter((reservation) => reservationId == reservation.id);
            response.json(reservationById[0]);
        } else {
            response.status(400).json({ error: "Id is not found!" });
        }
    } catch (error) {
        response.status(500).send({ error: "Internal Server Error." });
    }
    
})

module.exports = router;