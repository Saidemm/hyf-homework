const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Friends",
        days: 4,
        hours: 2,
        minutes: 20,
    },
    {
        title: "Breaking Bad",
        days: 6,
        hours: 0,
        minutes: 50,
    }
];
  
const lifeSpanInMinutes = 80 * 525600;

function logOutSeriesText() {
    let totalSeriesDuration = 0;

    for(let i = 0; i < seriesDurations.length; i++){
        if (seriesDurations[i] == null) {
            console.log("Error!");
        }
        else {
            let seriesDurationInMinutes = (seriesDurations[i].days * 1440 + seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
            //parseFloat is used for removing the trailing zeros from string added by toFixed call
            let percentageOfSeriesDuration = parseFloat(((seriesDurationInMinutes / lifeSpanInMinutes) * 100).toFixed(3)); 
            totalSeriesDuration += seriesDurationInMinutes;
            console.log(`${seriesDurations[i].title} took ${percentageOfSeriesDuration} % of my life.`);   
        }
    }
    let percentageOfTotalDuration = parseFloat(((totalSeriesDuration / lifeSpanInMinutes) * 100).toFixed(3)); 
    console.log(`In total that is ${percentageOfTotalDuration} % of my life.`);
}

logOutSeriesText();