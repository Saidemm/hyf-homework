const firstButton = document.getElementById("happyButton");
const setTimeButton = document.getElementById("funnyButton");
let count = 0;

let clickyButton = function(){
    console.log(count);
    count++;    
}
firstButton.addEventListener('click', clickyButton);
setTimeButton.addEventListener('click', clickyButton);


setTimeout(function() {
    console.log("This text was delayed by 3 seconds");
}, 3000);
setTimeButton.document.addEventListener('click', setTimeout());


