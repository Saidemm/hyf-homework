
function getSuitableCloth(temperature) {
    if (temperature <= 4) {
        return "A warm winter Jacket and a boot.";    
    } 
    else if (temperature > 4 && temperature <= 12 ) {
        return "A light winter Jacket.";  
    }
    else if (temperature > 12 && temperature <= 18 ) {
        return "An spring Jacket and jeans.";
    }
    else {
        return "a cool summer shirt and a hat.";
    }
}

const inputTemperature = 18; 
const clothToWear = getSuitableCloth(inputTemperature );
console.log("The weather is " + inputTemperature + " degrees, so the suitable clothing is: " + clothToWear);