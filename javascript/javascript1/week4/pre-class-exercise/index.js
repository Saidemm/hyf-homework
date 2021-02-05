fizzBuzzArrey = [];
function getFizzBuzz(){
    for(let i = 1; i < 100; i++){
        //let remainderFizz = i % 3;
        if ((i%3)==0) {
            fizzBuzzArrey.push("fizz");
        }
        else if((i%5)==0){
            fizzBuzzArrey.push("buzz");
        }
        else if((i%3)&&(i%5) == 0){
            fizzBuzzArrey.push("fizzBuzz");
        }
        else {
            fizzBuzzArrey.push(i); 
        }
    }
}
getFizzBuzz();
console.log(fizzBuzzArrey);
