const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName == null || studentName == "") {
        console.log("Please fill the name correctly");
    }
    else if (getNumberOfStudents() >= 6 && studentName != "Queen") {
        console.log("Cannot add more students to class 07");
    }
    else { 
        for (i = 0; i < getNumberOfStudents(); i++){
            if (studentName == class07Students[i]) {
                console.log("Student " + studentName + " is already in the class.");
                return;
            }
        }
        class07Students.push(studentName);
        console.log(studentName + " was added successfully! Class has now " + getNumberOfStudents() + " student(s).");
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass();
addStudentToClass("");
addStudentToClass("John");
addStudentToClass("Rose");
addStudentToClass("Micheal");
addStudentToClass("John");
addStudentToClass("Slavia");
addStudentToClass("Sara");
addStudentToClass("Tim");
addStudentToClass("Islam");
addStudentToClass("Queen");
addStudentToClass("Queen");








