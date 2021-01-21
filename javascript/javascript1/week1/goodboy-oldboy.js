// ******* Goodboy-Oldboy *******

const dogYearOfBirth = 2019;
const dogYearFuture = 2027;
const dogYear = 7 ; // dogYear = n * humanYear
const shouldShowResultInDogYears = false ;
let dogAge ;

dogAge = dogYearFuture - dogYearOfBirth ;
if(shouldShowResultInDogYears) {
    dogAge = dogYear * dogAge ;
    console.log ("Your dog will be " + dogAge + " dog years old in " + dogYearFuture);
}
else {
    console.log ("Your dog will be " + dogAge + " human years old in " + dogYearFuture);   
}