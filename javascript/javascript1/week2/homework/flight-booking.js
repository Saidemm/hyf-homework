/*functions*/
function getFullname(firstName, surName, useFormalName, isMale) {
    //setting defult value for useFormalNamw and isMale
    if (useFormalName == null){
        useFormalName = false;
    }
    if (isMale == null) {
        isMale = true;
    }
    //returning error message for empty firstName and surName
    if (firstName == null || firstName.length == 0) {
        return "Error: First name is not defined.";
    }
    else if (surName == null || surName.length == 0) {
        return "Error: Surname is not defined.";
    }
    else if (useFormalName) {
        if (isMale) {
            return "Fullname : Lord " + firstName + " " + surName; 
        } else {
            return "Fullname : Dame " + firstName + " " + surName;
        } 
    } 
    else {
        return "Fullname : " + firstName + " " + surName;
    }
}



/* main program*/
//testing first with empty parameters
console.log(getFullname());
console.log(getFullname("John"));
console.log("John","Smith")

const inputFirstName1 = "John";
const inputSurName1 = "Smitt";
const inputFormalName1 = true;
const isMaleInput1 = true;



let fullName1= getFullname(inputFirstName1, inputSurName1, inputFormalName1, isMaleInput1);

console.log(fullName1);

const inputFirstName2 = "Rose";
const inputSurName2 = "Hugs";
const inputFormalName2 = true;
const isMaleInput2 = false;

let fullName2= getFullname(inputFirstName2, inputSurName2, inputFormalName2, isMaleInput2);

console.log(fullName2);



