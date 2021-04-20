
//Saide JS test

//#1

for(i=10; i<=40; i++) {
    if(i%2 == 0){
        console.log(i);
        if(i%3 == 0 && i%5 == 0){
            console.log("Jackpot!");  
        } else if(i%5 == 0){
            console.log("This is divisible by 5!");
        } else if(i%3 == 0){
            console.log("This is divisible by 3!");
        }   
    }
}


//#2

function addH1Tag(){
    const h1Element = document.createElement('h1');
    h1Element.innerHTML = "This is an h1 Tag"; 
    document.body.appendChild(h1Element); 
}
const buttonElement = document.createElement('button');
buttonElement.innerHTML = "Add H1 Tag";
document.body.appendChild(buttonElement);

document.addEventListener('click', addH1Tag);


//#3

function renderUser(result){
    const users = result.data;
    for(i=0; i<3; i++) {
        const email = users[i].email;
        const divElement = document.createElement('div');
        divElement.innerHTML = `User #${i+1} email is ${email}`; 
        document.body.appendChild(divElement); 
    }
}
function fetchUsers(){
    fetch(`https://reqres.in/api/users`)
    .then(response => response.json())
    .then(result => renderUser(result));
}

fetchUsers();


//#4

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    logProduct(){
        console.log(`${this.name} is ${this.price}kr`);
    }
}

const flatscreen = new Product("flat-screen", 5000);
flatscreen.logProduct();