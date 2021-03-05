// Warm up 
// #1

setTimeout(() => {
    console.log("Called after 2.5 seconds");
}, 2500);


// #2

function logOutAfterDelay(delay, stringToLog) {
    setTimeout(() => { console.log(stringToLog); }, delay);
}
logOutAfterDelay(3000, "please wait for this, in 3.5 seconds you will get a message.")
logOutAfterDelay(3500, "What a beautiful day.")
logOutAfterDelay(5000, "You will see the last message after 6 seconds")
logOutAfterDelay(6000, "Thanks for checking this out.")

// #3

const setTimeButton = document.getElementById("happyButton");

function callbackLogOutFuncttion() {
    logOutAfterDelay(5000, "Called after 5 seconds");
}
setTimeButton.addEventListener('click', callbackLogOutFuncttion);

// The second way
setTimeButton.addEventListener('click', function () { logOutAfterDelay(5000, "Called after 5 seconds"); });

// #4 


function earthLogger() {
    console.log("Earth");
}

function saturnLogger() {
    console.log("Saturn");
}

const earth = earthLogger();
const saturn = saturnLogger();

const planetLogFunction = (planetCaller) => (planetCaller);

planetLogFunction(earth);
planetLogFunction(saturn);

// #5

const navButton = document.getElementById("navigationButton");
const status = document.getElementById("status");

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.innerHTML = "This is the latitude: " + latitude +
        "<br>This is the longitude: " + longitude;
    showMap({ lat: latitude, lng: longitude });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        status.innerHTML = "Geolocation is not supported by this browser.";
    }
}

navButton.addEventListener("click", getLocation);

// #6 google map;optional

let map;
function showMap(mapLocation) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 8,
    });
}

// #7

function runAfterDelay(delay, callback) {
    setTimeout(() => callback(), delay * 1000);
}

runAfterDelay(5, function () {
    console.log("Should be log out after 5 seconds!");
})

// #8
const targetClick = document.querySelector("body")
targetClick.addEventListener('dblclick', () => { console.log("double click!") });

// #9

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke.call();
    } else {
        logBadJoke.call();
    }
}

const funnyJoke = function () {
    console.log("My code doesn't work. Let's change nothing and run it again!:)")
};
const badJoke = function () {
    console.log("Programmer's joke:  !!FALSE ... It's funny, because it's true.")
};

jokeCreator(true, funnyJoke, badJoke);
jokeCreator(false, funnyJoke, badJoke);

