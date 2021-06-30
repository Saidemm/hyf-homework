const express = require('express');
var cors = require('cors');
const app = express()
const port = 5000;
app.use(express.json());   

app.use(cors());

var todosData = [
    {
      id: 0,
      description: "Brush teeth",
      isDone : false
    },
    {
      id: 1,
      description: "Get out of bed",
      isDone : false
    },
    {
      id: 2,
      description: "Eat breakfast",
      isDone : false
    }
  ];


app.get('/todos', (req, res) => {
    res.json(todosData);
})

app.post('/todo', (req, res) => {
    console.log(req.body)
    const getHigherId = Math.max(0, ...todosData.map(todo => todo.id)) +1;  

    todosData = [
        ...todosData,
        {
          id: getHigherId,
          description: req.body.description,
          isDone: false,
        },
      ];
    res.json(todosData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})