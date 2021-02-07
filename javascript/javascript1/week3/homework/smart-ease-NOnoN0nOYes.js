// (Note taking app) taking and saveing a note
const notes = [];

function saveNote(content, id) {
    if (content == null || content.length == 0) {
        console.log("Content is not defined or it's empty! Please provide a content.");
    }
    else if (id == null) {
        console.log("Id is not defined! Please select an Id and save your note again.");
    }
    else if (isNaN(id)) {
        console.log("Please enter a number for your id");
    }
    else {      
        notes.push({content, id});
    }   
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do shopping", 3);
saveNote("Pick up kid", 4);

console.log(notes);





//Get a note
function getNote(id) {
    for (let i = 0; i < notes.length; i++){
        if (id == null) {
            console.log("Id is not defined! Please select an Id and save your note again.");
        }
        else if (isNaN(id)) {
            console.log("Please enter a number for your id");
        }
        else if (id == notes[i].id) {
            return notes[i];
        }
    }
    return "There is no such note with Id: " + id;
}

let firstNote = getNote(2);
console.log(firstNote); 
firstNote = getNote(12);
console.log(firstNote);



//Log out notes

function logOutNotesFormatted() {
    for (let note of notes) {
        console.log(`The note with id: ${note.id} ,has the following note text: ${note.content}`);
    }
};

logOutNotesFormatted(); 
