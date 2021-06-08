const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());



function sendResponse(result, response) {
    isNaN(result) ? response.status(400).send("Input must be number") : response.send(`${result}`);
}


app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (request, response) => {

    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => parseInt(x));
        const sum = paramValueArray.reduce((requestParam, sum) => requestParam + sum, 0);

        sendResponse(sum, response);

    } catch (error) {

        response.status(500).send({ error: "Internal Server Error." });
    }
})



app.get("/calculator/substract", (request, response) => {
    console.log(request.query);
    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => parseInt(x));
        const substract = paramValueArray.slice(1).reduce((requestParam, substract) => requestParam - substract, paramValueArray[0]);

        sendResponse(substract, response);
       
    } catch (error) {

        response.status(500).send({ error: "Internal Server Error." });
    }
})

app.get("/calculator/multiply", (request, response) => {

    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => parseInt(x));
        const multiple = paramValueArray.reduce((requestParam, multiple) => requestParam * multiple, 1);

        sendResponse(multiple, response);
    } catch (error) {

        response.status(500).send({ error: "Internal Server Error." });
    }
})

app.get("/calculator/division", (request, response) => {

    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => parseInt(x));

        const division = paramValueArray.slice(1).reduce((requestParam, division) => requestParam / division, paramValueArray[0]);

        sendResponse(division, response);
        
    } catch (error) {

        response.status(500).send({ error: "Internal Server Error." });
    }
})


//Getting data through the request body using POST

app.post("/calculator/:operator", (request, response) => {

    try {
        const operator = request.params.operator;
        const paramValueArray = Object.values(request.body)
            .flatMap(x => parseInt(x));

        if(operator == "add") {
            const sum = paramValueArray.reduce((requestParam, sum) => requestParam + sum, 0);
            sendResponse(sum, response);

        } else if(operator == "substract") {
            const substract = paramValueArray.slice(1).reduce((requestParam, substract) => requestParam - substract, paramValueArray[0]);
            sendResponse(substract, response);

        } else if(operator == "multiply") {
            const multiple = paramValueArray.reduce((requestParam, multiple) => requestParam * multiple, 1);
            sendResponse(multiple, response);

        } else if(operator == "division") {
            const division = paramValueArray.slice(1).reduce((requestParam, division) => requestParam / division, paramValueArray[0]);
            sendResponse(division, response);
        }  else {
            res.status(404).json({
                error: "there is no such operator with that name"
            });
        }

        
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: "Internal Server Error." });
    }
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
