
function removeItemFromArray(names,nameToRemove) {
    for( let i =0; i < names.length; i++) {
        if (names[i] == nameToRemove) {
            names.splice(i, 1);
            i--; //to handle removal of duplicate elements in arrey
        } 
    }
}

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

removeItemFromArray(names, nameToRemove);

console.log(names);


 // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']