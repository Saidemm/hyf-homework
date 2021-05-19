const express = require("express");
const app = express();


app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());


app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (request, response) => {
    console.log(request.query);
    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => x)
            .map(x => parseInt(x));
        const sum = paramValueArray.reduce((requestParam, sum) => requestParam + sum, 0);
        console.log(sum);

        if (isNaN(sum)) {
            response.status(400).json({ error: "Input must be number" });
            return
        } else {
            response.send(`${sum}`);
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: "Internal Server Error." });
    }
})

app.get("/calculator/substract", (request, response) => {
    console.log(request.query);
    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => x)
            .map(x => parseInt(x));
        const substract = paramValueArray.slice(1).reduce((requestParam, substract) => requestParam - substract, paramValueArray[0]);
        console.log(substract);

        if (isNaN(substract)) {
            response.status(400).json({ error: "Input must be number" });
            return
        } else {
            response.send(`${substract}`);
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: "Internal Server Error." });
    }
})

app.get("/calculator/multiply", (request, response) => {
    console.log(request.query);
    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => x)
            .map(x => parseInt(x));
        const multiple = paramValueArray.reduce((requestParam, multiple) => requestParam * multiple, 1);
        console.log(multiple);

        if (isNaN(multiple)) {
            response.status(400).json({ error: "Input must be number" });
            return
        } else {
            response.send(`${multiple}`);
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: "Internal Server Error." });
    }
})

app.get("/calculator/division", (request, response) => {
    console.log(request.query);
    try {
        const paramValueArray = Object.values(request.query)
            .flatMap(x => x)
            .map(x => parseInt(x));
        const division = paramValueArray.slice(1).reduce((requestParam, division) => requestParam / division, paramValueArray[0]);
        console.log(division);

        if (isNaN(division)) {
            response.status(400).json({ error: "Input must be number" });
            return
        } else {
            response.send(`${division}`);
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: "Internal Server Error." });
    }
})


app.post("/calculator/multiply", (request, response) => {

    try {
        const paramValueArray = Object.values(request.body)
            .flatMap(x => x)
            .map(x => parseInt(x));
             console.log(paramValueArray);
        const multiple = paramValueArray.reduce((requestParam, multiple) => requestParam * multiple, 1);
        console.log(multiple);

        if (isNaN(multiple)) {
            response.status(400).json({ error: "Input must be number" });
            return
        } else {
            response.send(`This:${multiple}`);
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({ error: "Internal Server Error." });
    }
})


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
