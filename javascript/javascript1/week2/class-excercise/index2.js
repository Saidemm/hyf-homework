const inputRaduis=15;

function getCircleArea(radius) {
   return Math.PI * Math.pow(radius, 2); 
}

let area = getCircleArea(inputRaduis);

console.log(area);






const inputCelcuis = 100;
function celciusToFahreneit(celcius) {
    return celcius * 1.8 + 32;
}

let fahreneitTempreture = celciusToFahreneit(inputCelcuis);

console.log(inputCelcuis + " celcuis is " + fahreneitTempreture + " fahreneit.");
