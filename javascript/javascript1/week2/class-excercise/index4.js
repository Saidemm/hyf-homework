const peterEmails = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
function sendEmailTo(recepient) {
    console.log('email sent to ' + recepient);
}

let emailArray = peterEmails.split("|");
 
for (i=0; i<emailArray.length; i++) {
    sendEmailTo(emailArray[i]);
}