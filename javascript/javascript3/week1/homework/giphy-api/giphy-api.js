
// Giphy app 
const apiKey = "6oiwHyH3t5u02qqbm5cTIk0BKpE2zGV8";
const defaultGifLimit = 10;

const searchingForGifElement = document.getElementById("searchingForGif");
const searchButtonElement = document.getElementById("searchButton");
const numbersOfGifElement = document.getElementById("numbersOfGif");
const gifListsContainerElement = document.querySelector(".gifListsContainer")

searchButtonElement.addEventListener("click", () => {
    searchingForGifElement.innerHTML = ""
    const searchedWord = searchingForGifElement.value.toLowerCase().trim();
    if(searchedWord == ""){
        searchingForGifElement.innerHTML = "Please enter a word!"
    }
    let gifLimit = parseInt(numbersOfGifElement.value.trim());
    if(isNaN(gifLimit)){
        gifLimit = defaultGifLimit;
    };
    fetchGiphy(searchedWord, gifLimit);
})

function fetchGiphy(searchedWord, gifLimit){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchedWord}&limit=${gifLimit}&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(findGif => renderGif(findGif));
}

function renderGif(gifObj){
    console.log(gifObj);
    gifListsContainerElement.innerHTML = "";
    gifObj.data.forEach(element => {
        const imageContainerElement = document.createElement("div");
        imageContainerElement.className="imageItemContainer";
        const imageGifElement = document.createElement("img");
        imageGifElement.className="imageItem";
        gifListsContainerElement.appendChild(imageContainerElement);
        imageContainerElement.appendChild(imageGifElement);
        imageGifElement.src = element.images.downsized.url;
    })  
}