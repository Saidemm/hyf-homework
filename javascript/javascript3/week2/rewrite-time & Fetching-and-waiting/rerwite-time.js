//Rewrite time


function setTimeoutPromise(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});


const navButton = document.getElementById("navigationButton");
const status = document.getElementById("status");


function getCurrentLocation(){
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        } else {
            reject(new Error("Whoops! Geolocation is not supported by this browser."));
        }
    })
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.innerHTML = "This is the latitude: " + latitude +
        "<br>This is the longitude: " + longitude;
}


function getLocation(){
    getCurrentLocation()
        .then(position => {
            showPosition(position);
        })
        .catch(error => {
            console.log(error);
        });
}
navButton.addEventListener("click", getLocation);

    