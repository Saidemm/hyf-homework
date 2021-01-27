function calculateBoughtCandySoFar(){
    let boughtCandySoFar = 0;
    let i = 0;
    while(i <boughtCandyPrices.length) {
        boughtCandySoFar += boughtCandyPrices[i];
        i++;
    }
    return boughtCandySoFar;
}

function canBuyMoreCandy(newCandyPrice){  
    return calculateBoughtCandySoFar() + newCandyPrice < amountToSpend;
}

function addCandy(candyType, weight) {
    if(candyType == null || weight == null){
        console.log("Error! CandyType or Weight is not defined.");
    } else {
        for (i = 0; i < candyTypePrice.length; i++){
            if (candyType == candyTypePrice[i].candyType) {
                let newCandyPrice = weight * candyTypePrice[i].pricePerGram;
                if (canBuyMoreCandy(newCandyPrice)) {
                    console.log("You can buy more, so please do!");
                    boughtCandyPrices.push(newCandyPrice);
                }
                else {
                    console.log("Enough candy for you!");
                }
                return;
            }
        }
        console.log("No such candy with type " + candyType + "found!");
    }
}
    
const candyTypePrice = [
    {
        candyType: "Sweet",
        pricePerGram: 0.5
    }, 
    {
        candyType: "Chocolate",
        pricePerGram: 0.7
    }, 
    {
        candyType: "Toffee",
        pricePerGram: 1.1
    }, 
    {
        candyType: "Chewing-gum",
        pricePerGram: 0.03
    }

];
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;
console.log("Budjet is: " + amountToSpend);

//Testing with no parameters
addCandy();

addCandy("Toffee", 2);
addCandy("Chocolate", 4);
addCandy("Sweet", 2);
addCandy("Chewing-gum", 4);
addCandy("Toffee", 400);

console.log("Totally spent: " + calculateBoughtCandySoFar());
