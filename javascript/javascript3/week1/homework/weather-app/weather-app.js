// #3&4 First call to the weather api

// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=f121c110a28ad82d5b470533a8560dc4


// #5 Fetch weather data from a city

const buttonElement = document.getElementById("weatherButton");
const cityNameElement = document.querySelector('#cityNameElement');
const inputMessageElement = document.getElementById("inputMessage");
const loadIconElement = document.querySelector('.loadIcon');
const weatherContainerElement = document.querySelector('.weatherInfoContainer');
const weatherTempElement = document.querySelector('.weatherTemp');
const weatherWindSpeedElement = document.querySelector('.weatherWindSpeed');
const weatherCloudyPercentageElement = document.querySelector('.weatherCloudyPercentage');
const weatherSunriseTimeElement = document.querySelector('.weatherSunriseTime');
const weatherSunsetTimeElement = document.querySelector('.weatherSunsetTime');
const weatherTypeIconElement = document.getElementById("weatherTypeIcon");
const weatherCityNameElement = document.getElementById("weatherCityName");
const weatherMapElement = document.querySelector('.weatherMap');
const myLocationWeatherElement = document.getElementById("myLocationWeather");
const locationStorageKey = "HYF.js3.w1.weather";

buttonElement.addEventListener("click", () => {
    const cityName = cityNameElement.value.toLowerCase().trim();
    if (cityName == "") {
        weatherContainerElement.style.visibility = "hidden";
        inputMessageElement.innerText = "Please enter a city name inside the box!"
        return;
    } else {
        loadIconElement.style.visibility = "visible";
        inputMessageElement.innerHTML = "";
        //A delay only to see the loading gif
        setTimeout(function(){fetchWeather(cityName);}, 2000);
    }
})
myLocationWeatherElement.addEventListener("click", getLocation);

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);

    fetchMyWeather(latitude, longitude);
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        inputMessageElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function fetchMyWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f121c110a28ad82d5b470533a8560dc4`)
    .then(response => response.json())
    .then(myLocationWeather => renderWeather(myLocationWeather));
}


function fetchWeather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f121c110a28ad82d5b470533a8560dc4`)
    .then(response => response.json())
    .then(cityWeather => renderWeather(cityWeather));
}

function renderWeather(weatherObj){
    console.log(weatherObj);
    weatherCityNameElement.innerHTML = weatherObj.name;
    weatherTempElement.innerHTML = `${Math.floor(weatherObj.main.temp)}°`;
    weatherWindSpeedElement.innerHTML = `${Math.floor(weatherObj.wind.speed)} m/s`;
    weatherCloudyPercentageElement.innerHTML = `${Math.floor(weatherObj.clouds.all)} %`;
    const sunriseTime = (new Date(weatherObj.sys.sunrise * 1000)).toLocaleTimeString();
    weatherSunriseTimeElement.innerHTML = sunriseTime;
    const sunsetTime = (new Date(weatherObj.sys.sunset * 1000)).toLocaleTimeString();
    weatherSunsetTimeElement.innerHTML = sunsetTime;
    weatherTypeIconElement.src= "http://openweathermap.org/img/wn/" + weatherObj.weather[0].icon + "@2x.png"; 
    const coords = {lat: weatherObj.coord.lat, lng: weatherObj.coord.lon};
    showMap(coords);
    loadIconElement.style.visibility = "hidden";
    weatherContainerElement.style.visibility = "visible";
    localStorage.setItem(locationStorageKey, weatherObj.name);
}

function showMap(coords) {
    new google.maps.Map(weatherMapElement, {
        center: coords,
        zoom: 8,
    });
}

const storedCityName = localStorage.getItem(locationStorageKey);
if(storedCityName != null){
    fetchWeather(storedCityName);
}




