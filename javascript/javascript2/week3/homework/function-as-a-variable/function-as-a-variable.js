
// Function as a variable

// Declare an array of functions 

const arrayOfFunction = [
    function () {
        console.log("First Happy Function");
    },

    function () {
        console.log("Second Happy Function");
    },

    function () {
        console.log("Third Happy Function");
    }
]

function multiTask() {
    arrayOfFunction.forEach(fn => fn());
    fn1();
    fn2();
    objetcFunction.day();
}

const fn1 = function fn1() {
    console.log("Function Expretion");
}
function fn2() {
    console.log("Function Declaration");
}
// object with a key of function

const objetcFunction = {
    day: () => { console.log("such a nice day") }
}

multiTask();