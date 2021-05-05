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
            response.status(404).json({error: "Id must be integers."});
            return;
        }

        if(reservationId <= reservations.length) {
            const reservationById = reservations.filter((reservation) => reservationId == reservation.id);
            response.json(reservationById[0]);
        } else {
            response.json({});
        }
    } catch (error) {
        throw error;
    }
    
})

module.exports = router;