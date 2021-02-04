//(Smart phone usage app) Adding an activity
function getTodayFormattedDate(){
    const now = new Date();
    return now.toLocaleDateString("en-US");
}
function addActivity(activity, duration) {
    const date = getTodayFormattedDate();
    if (activity == null || activity.length == 0) {
        console.log("activity is not defined or it's empty! Please provide a activity.");
    }
    else if (duration == null) {
        console.log("duration is not defined! Please select an duration.");
    }
    else if (isNaN(duration)) {
        console.log("Please enter a number for your duration");
    }
    else {
        activities.push({date, activity, duration});       
    }
}

const activities =[];
let limit = null; //limitless
addActivity("Instagram", 10);
addActivity("Youtube", 20);
addActivity("tweeter", 30);
console.log(activities);

function setLimit(newLimit) {
    limit = newLimit;
}

function showStatus(activities){
    let todayDurationsTotal = 0;
    let todayLength = 0;
    if (activities.length == 0) {
        console.log(`Add some activities before calling showStatus`);
    }
    else {
        for (let i = 0; i < activities.length; i++){
            if(activities[i].date == getTodayFormattedDate()){
                todayDurationsTotal += activities[i].duration;
                todayLength++;
            }
        }
        if (todayLength == 0) {
            console.log(`No activity is added today.`);
        }
        else if (limit != null && todayDurationsTotal > limit) {
            console.log(`You have reached your daily limit, no more smartphoning for you!`);
        }
        else{
            console.log(`You have added ${todayLength} activities today. They amount to ${todayDurationsTotal} min. of usage`);
        }
    }
}

showStatus(activities);
setLimit(10);
showStatus(activities);


function activityWithMaxTime(){
    let maxTime = 0;
    for (let i = 0; i < activities.length; i++){
        if (activities[i].duration > maxTime){
            maxTime = activities[i].duration;
        }
    }
    console.log(`The maximum time you spent on an activity was ${maxTime} min.`);
}

activityWithMaxTime(activities);