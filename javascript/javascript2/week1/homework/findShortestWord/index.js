//Find the shortest word 
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function getShorterWord(danishWords) {
    const lengthOfDanishWords = [];
    danishWords.forEach(word => {
        lengthOfDanishWords.push(word.length)
    });
    let shorterDanishWord = Math.min.apply(Math, lengthOfDanishWords);
    danishWords.forEach(word => {
        if (word.length == shorterDanishWord) {
            console.log(`Shortest Danish word : ${word}`);
        }
    });

};
getShorterWord(danishWords);


//This program finds and counts the Danish letters

const danishLetters = ["å", "æ", "ø"];
function numbersOfDanishLetters(danishString) {
    const numberOfå = (danishString.match(/å/g) || []).length;
    const numberOfæ = (danishString.match(/æ/g) || []).length;
    const numberOfø = (danishString.match(/ø/g) || []).length;
    const totalnumOfdanishLetters = numberOfå + numberOfæ + numberOfø;

    let info = {};
    info.total = totalnumOfdanishLetters;
    if (numberOfå != 0) {
        info["å"] = numberOfå;
    }
    if (numberOfæ != 0) {
        info["æ"] = numberOfæ;
    }
    if (numberOfø != 0) {
        info["ø"] = numberOfø;
    }
    return info;
};
const danishString = "Jeg har en blå bil";
console.log(numbersOfDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(numbersOfDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}