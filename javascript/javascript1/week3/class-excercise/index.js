/*function bookPlaneTickets() {
    console.log("[34,27,2]", new Error().stack);
    console.log('Plane tickets booked');
    requestVacationDays();
    console.log("[34,27,5]", new Error().stack);
}

 function bookHotel() {
    console.log('Hotel booked');
    console.log("[34,29,10]", new Error().stack);
    planItinerary();
    console.log("[34,29,12]", new Error().stack);
}

function requestVacationDays() {
    console.log("[34,27,4,16]", new Error().stack);
    console.log('Vacation days requested');
    console.log("[34,27,4,18]", new Error().stack);
}

function planItinerary() {
    console.log('Itinerary done');
    console.log("[34,29,11,23]", new Error().stack);
}

function planTrip() {
    bookPlaneTickets();
    console.log("[34,28]", new Error().stack);
    bookHotel();
    console.log("[34,30]", new Error().stack);
    console.log('Trip planned');
}
console.log("[33]", new Error().stack);
planTrip();
console.log("[35]", new Error().stack);
*/

/*
const person ={
    name: "Islam",
    age: 30,
    teacher: false
};
const johnHello = {
    name: "John",
    age: 30,
    teacher: true,
};
*/



/*
//Exercise 1

// convert this to use:
// 1. destructuring: const {a, b} = obj;
// 2. template literals: `${obj.a}`;
// bonus: tenary operator: isSomethingTrue ? 'yes' : 'no'

function hello(person) {
    const name = person.name;
    console.log('Hello', name);
    if(person.teacher) {
        // if person is teacher
        console.log('You are a teacher at HYF');
    } else {
        // if person is not a teacher
        console.log('You are a student at HYF');
    }
}
console.log(hello());

//Exercise 2

// convert this to use:
// 1. destructuring: const {a, b} = obj;
// 2. template literals: `${obj.a}`;
// bonus: tenary operator: isSomethingTrue ? 'yes' : 'no'
// 3. add a optional parameter (showAge)
// if showAge is true, add an additional console.log
// 'You are <age> years old.'

const gohar = {
    name: "Gohar",
    age: 30,
    teacher: true,
};
function hello(person,showAge= true) {
    const { name, age, teacher } = person;
    const role = teacher ? 'teacher' : 'student';
    console.log(`Hello ${name}. You are a ${role} at HYF.`);
    if (showage){
        console.log( 'You are'+ age + 'years old.')
    }
}
hello(gohar,false)
*/



function colourAssociation(arrey){
    let newArrey = [];
    for(let i=0; i < arrey.length; i++){
        let newObj = {}; 
        newObj[arrey[i][0]] = arrey[i][1];
        newArrey.push(newObj);
        //console.log(JSON.stringify(newArrey));
    }
    return newArrey;
  }
/*
  let myArray = [];
  let x = {a:1};
  myArray.push(x);
  let y = x;
  
  x = {};
  x.a=234;
  x.b=123;
  x.c=1234;

  y.a=1234;
  y.b=2;
  y.c=3;
  y.d=4;
  
  console.log(JSON.stringify(myArray));
 */   
 
let x = colourAssociation([["white", "goodness"],["black", "evil"]]);

let toLog = "[" ;
for(let i=0; i<x.length;i++){
    for(let key in x[i] ){
        toLog += (i==0 ?"" :",") + "{\"" + key + "\":\"" + x[i][key] + "\"}";
    }
}
toLog += "]";
console.log(toLog);

//[{white:"goodness"}, {black:"evil"}]



let a = "abc";
a = a + "d"
