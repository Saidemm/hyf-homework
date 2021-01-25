/*function checkAge(age) {
     return age > 18 || confirm('Did parents allow you?');
  }

function leastNumber(a,b) {
    if (a<b) {
         return a;
         } else {
             return b;
         }

}

for (let i=0; i<11; i++) {
    console.log (i);
}

let companyName = prompt ('What\'s the “official” name of JavaScript?',0);

if (companyName > 0) {
    console.log (1)
} else if (companyName < 0) {
    console.log (-1)
} else if (companyName == 0) {
    console.log (0)
}



/*
console.log(undefined > 100);
console.log(undefined < 100);

console.log(null > 100);
console.log(null < 100);

if(area > 100){
    console.log("The Big circule are is: " + area);
}
else if(area < 100){
    console.log("The small circule are is: " + area);
}
else{
    console.log("Error, No value was returned!");
}
*/




// Create a function addNumbers
// Takes two parameters
// Returns result
// If second parameter not provided, it should be 1

// addNumbers(2, 3) => 5
// addNumbers(10) => 11


function addNumbers(a, b = 1) {
    return a + b;
}
