const order1 = [
  {
    "orderName": "Burger Menu",
    "orderId": "39",
    "price": "400",
    "listOfDrinks": [
      "Classic Beer",
      "Cola",
      "Water"
    ],
    "orderExtras": {
      "cheese": "Camember",
      "Fries": "Sweet potato",
      "dessert": "Creme brule"
    }
  }
]



// Fetch
fetch('https://yesno.wtf/api/')
  .then(response => response.json())
  .then(yesOrNoData => {
      console.log(yesOrNoData);
      const span = document.createElement("span");
      span.innerHtml = yesOrNoData.answer;
      document.body.appendChild(span);
      // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
  });




setInterval(function(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(dogFanWebsite => {
      console.log(dogFanWebsite);
    const image = document.createElement("img");
    image.src = dogFanWebsite.message;
    document.body.appendChild(image)
  })
}, 2000)

fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(breeds => {
    console.log(breeds);

<<<<<<< Updated upstream
   
 
=======
>>>>>>> Stashed changes

const dogBreedsArrey = Object.keys(breeds.message);
console.log(dogBreedsArrey);
const randomBreed = dogBreedsArrey[Math.floor(Math.random() * dogBreedsArrey.length)];
console.log(randomBreed);


fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
  .then(response => response.json())
  .then(randomImage => {
    console.log(randomImage);
    const imageBreed = document.createElement("img");
    document.body.appendChild(imageBreed);
    imageBreed.src = randomImage.message;

  });

})


