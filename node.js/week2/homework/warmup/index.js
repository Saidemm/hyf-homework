const express = require("express");
const app = express();

  

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (request, response) => {
    console.log(request.query);

    const firstNumber = parseFloat(request.query.first);
    const secondNumber = parseFloat(request.query.second);
    const sum = firstNumber + secondNumber;

    if (isNaN(sum)) {
        response.status(400).json({ error: "Input must be number" });
        return
    } else {
        response.send(`${sum}`);
    }
    
})

app.get("/numbers/multiply/:first/:second", (request, response) => {
    console.log(request.query);

    const firstNumber = parseFloat(request.params.first);
    const secondNumber = parseFloat(request.params.second);
    const multiple = firstNumber * secondNumber;

    if (isNaN(multiple)) {
        response.status(400).json({ error: "Input must be number" })
        return
    } else {
        response.send(`${multiple}`);
    }
    
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
