// ******* Ez Namey *******

const firstWords = ["Easy", "Awsome", "Evolutionary", "Approachable", "Creative", "Authentic", "Trustworthy", "Motivated", "Professional", "Reliable"];
const secondWords = ["Company", "Innovation", "Factory", "Corporation", "World", "House", "Future", "Future Planners", "Dream", "Business"];


const randomFirstWordIndex = Math.floor(Math.random() * firstWords.length);
const randomSecondWordIndex = Math.floor(Math.random() * secondWords.length);

let newStartUpName = firstWords[randomFirstWordIndex] + " " + secondWords[randomSecondWordIndex];
console.log("The startup: \"" + newStartUpName + "\" contains " + newStartUpName.length + " characters.");
