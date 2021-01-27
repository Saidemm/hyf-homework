
function getEventWeekday(dayFromToday) {
    let now = new Date();
    let todayIndex = now.getDay();
    return "The event is being held on " + weekDays[dayFromToday % 7 + todayIndex] + ".";
}


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayFromToday = 37;

console.log(getEventWeekday(dayFromToday));
