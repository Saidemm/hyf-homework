// ******* Housey pricey *******

const peterHouse = {
    width: 8,
    depth: 10,
    height: 10,
    gardenArea: 100,
    price:2500000
};
const juliaHouse = {
    width: 5,
    depth: 11,
    height: 8,
    gardenArea: 70,
    price:1000000
};

let fairPrice = (peterHouse.width * peterHouse.depth * peterHouse.height * 2.5 * 1000) + (peterHouse.gardenArea * 300);
if(fairPrice <= peterHouse.price ) {
    console.log ("Peter is paying too much for the house.");
} 
else {
    console.log ("Peter is paying too little for the house.");
}

fairPrice = (juliaHouse.width * juliaHouse.depth * juliaHouse.height * 2.5 * 1000) + (juliaHouse.gardenArea * 300);
if(fairPrice <=  juliaHouse.price) {
    console.log ("Julia is paying too much for the house.");
}
else {
    console.log ("Julia is paying too little for the house.");
}