//Spirit animal name generator


const spiritAnimal = [
    "The curious cat",
    "The confident deer",
    "The courageous lion",
    "The fullmoon wolf",
    "The loyal dog",
    "The wise owl",
    "The compassionate hawk",
    "The intelligent fox",
    "The crying butterfly",
    "The quick rabbit", 
    ];
const userNameElement = document.getElementById("userName");
const resultText = document.getElementById("resultName");
const magicButton = document.querySelector("#spiritButton");

function generateMagicResult(){
    userName = userNameElement.value;
    if (userName == null || userName == "") {
        resultText.innerHTML = `Please enter your name!`;
        return;
    }else {
        const randomSpiritAnimal = Math.floor(Math.random() * spiritAnimal.length);
        resultText.innerHTML = `${userName} - ${spiritAnimal[randomSpiritAnimal]}`;
    }
    if(selectedEventType == 3){
        magicButton.innerHTML = `Try again for new spirit animal`;
    }
}

const eventSelectorElement = document.querySelector("#eventSourceSelect");
let lastEventType = 0;
let selectedEventType = 0;

function clearLastEventSource(){
    magicButton.innerHTML = `Click me`;
    if(lastEventType == 1){
        userNameElement.removeEventListener("mouseover", generateMagicResult);
    } else if (lastEventType == 2){
        userNameElement.removeEventListener("change", generateMagicResult);
    } else if (lastEventType == 3){
        magicButton.removeEventListener("click", generateMagicResult);
    }
}

function changeEventSource(){
    let  eventSelectorIndex = eventSelectorElement.selectedIndex;
    selectedEventType = eventSelectorElement.options[eventSelectorIndex].value;
    clearLastEventSource();
    if(selectedEventType == 1){
        userNameElement.addEventListener("mouseover", generateMagicResult);
    } else if (selectedEventType == 2){
        userNameElement.addEventListener("change", generateMagicResult);
    } else if (selectedEventType == 3){
        magicButton.addEventListener("click", generateMagicResult);
    }
    lastEventType = selectedEventType;
}

eventSelectorElement.addEventListener("change", changeEventSource);


