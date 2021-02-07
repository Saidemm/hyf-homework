function timeToGetToDestination(travelInformation){
    if (travelInformation.speed == null || travelInformation.destinationDistance == null){
        console.log("Error in input!");
    }
    else {
        return travelInformation.destinationDistance / travelInformation.speed;
    }

}

function timeConvert(travelTime){
    let totalMinutes = travelTime * 60;
    let hours = Math.floor(totalMinutes / 60);  
    let minutes = Math.floor(totalMinutes % 60);
    return hours + " hour(s) " + " and " + minutes + " minute(s)";         
}

const travelInformation = {
    speed: 50,
    destinationDistance: 432
};

const travelTime = timeToGetToDestination(travelInformation);
const durationTime = timeConvert(travelTime)
console.log(durationTime);
