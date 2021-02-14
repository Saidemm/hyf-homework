// Analyses the input voice command and dispatches it to the appropriate processor function
function getReply(command){
    if (command.startsWith("Hello my name is ")) {
        replyToHello(command);
    }
    else if (command == "What is my name?") {
        replyWithLastSavedName();
    }
    else if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
        addToTodoList(command);
    }  
    else if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
        removeFromTodoList(command);
    }
    else if (command == "What's on my todo?") {
        getTodoList();
    }
    else if (command == "What day is it today?") {
        getTodayFormattedDate();
    }
    else if (command.startsWith("what is ")) {
        doSimpleMath(command);
    }
    else if (command.startsWith("Set a timer for ") && command.endsWith(" minutes")) {
        setTimer(command);
    }
}

let namesList = [];
function replyToHello(command){
    let nameOfUser = command.slice(17).trim();
    if (nameOfUser == ""){
        console.log("No name was defined! Please add your name.");
        return;
    }
    for(i=0; i < namesList.length; i++){
        if (nameOfUser == namesList[i]){
            console.log("The name is already used!");
            return;
        }
    }
    namesList.push(nameOfUser);
    console.log("Nice to meet you " + nameOfUser);
}

function replyWithLastSavedName(){
    if (namesList.length == 0) {
        console.log("You haven't told me your name yet!");  
        return;
    }
    else {
        let lastNameOfArrey = namesList[namesList.length-1]
        console.log("Your name is " + lastNameOfArrey);
        return;
    }
}

const todosList = [];
function addToTodoList(command){
    let firstIndex = "Add".length;
    let secondIndex = command.indexOf(" to my todo");
    let newToDo = command.slice(firstIndex, secondIndex).trim();
    todosList.push(newToDo);
    console.log(newToDo + " added to your todo");
}



function removeFromTodoList(command){
    let firstIndex = "Remove".length;
    let secondIndex = command.indexOf(" from my todo");
    let fromToDo = command.slice(firstIndex, secondIndex).trim();
    remove(todosList, fromToDo);
}

function remove(todosList, fromToDo) {
    let indexToRemove = todosList.indexOf(fromToDo);
    while (indexToRemove != -1) {
        todosList.splice(indexToRemove, 1);
        indexToRemove = todosList.indexOf(fromToDo);
    }
    console.log("Removed " + fromToDo + " from your todo");
}

function getTodoList(){
    if (todosList == null){
        console.log(" you have no todos!");
        return;
    }
    console.log(`you have ${todosList.length} todos- ${todosList.join("and")}`);
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getTodayFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const monthIndex = today.getMonth();
    const monthName = months[monthIndex];
    const dayIndex = today.getDay();
    const dayName = days[dayIndex];
    const formattedDate = `${dayName}, ${date}. of ${monthName} ${year}`
    console.log(formattedDate);
}

function doSimpleMath(command){
    const simpleMath = command.slice(7).trim();
    if(validMathExpression(simpleMath)){ // For security reasons we should validate first
        try{
            const calcResult = new Function("return " + simpleMath + ";")();
            if(isNaN(calcResult)){
                console.log("Invalid matth problem!");
            }
            else{
                console.log("It is: ", calcResult);
            }
        }
        catch(e){
            console.log("Invalid matth problem!");
        }
    }
}

const rg = /^[0-9\+\-\*\/\s]+$/;
function validMathExpression(mathExpression){
    if(rg.test(mathExpression)){
        return true;
    }
    else{
        console.log("Invalid matth problem!");
    }
}

function setTimer(command){
    const timerInMinute = parseInt(command.substr(-9, 1).trim());
    const timerInMilliseconds = timerInMinute * 60000;
    setTimeout(setAlert, timerInMilliseconds);
    console.log(`Timer set for ${timerInMinute} minutes`);
}

function setAlert() {
    console.log("Timer done");
}

getReply("Hello my name is Benjamin");
getReply("Hello my name is ");
getReply("Hello my name is Benjamin");
getReply("Hello my name is Sara");

getReply("What is my name?");

getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");

getReply("Remove fishing from my todo");

getReply("What's on my todo?");

getReply("What day is it today?");

getReply("what is malicious-code");
getReply("what is 3 +");
getReply("what is 3 + 3");
getReply("what is 4 * 12"); 
getReply("what is 4 * 12 * 30"); 
getReply("what is 4 * 12 / 20"); 

getReply("Set a timer for 4 minutes");
getReply("Set a timer for 6 minutes");

