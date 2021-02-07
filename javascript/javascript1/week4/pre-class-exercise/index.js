const fizzBuzzArrey = [];
function getFizzBuzz(firstInput, secondInput){
    for(let i = 1; i < 100; i++){
        let added = false;
        if (i % firstInput == 0) {
            added = true;
            fizzBuzzArrey.push("fizz");
        }
        if(i % secondInput == 0){
            added = true;
            fizzBuzzArrey.push("buzz");
        }
        if(i % firstInput == 0 && i% secondInput == 0){
            added = true;
            fizzBuzzArrey.push("fizzBuzz"); 
        }
        if(!added){
            fizzBuzzArrey.push(i); 
        }
    }
}
getFizzBuzz(4, 12);
console.log(fizzBuzzArrey);




// Second Exercise
const positiveWords = ['happy', 'awesome', 'super'];
const negativeWords = ['boring', 'hate', 'bad'];

function getSentimentScore(str) {

}






const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject); 
/*
{
  score: 3,
 
  negativeWords: [],
}
*/