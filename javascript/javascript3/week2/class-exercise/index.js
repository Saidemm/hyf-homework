
async function getYesOrNo(){ 
    try {
        const yesOrNoResponse = await fetch(`https://yesno.wtf/api`);
        console.log(yesOrNoResponse);
        const yesOrNo = await yesOrNoResponse.json();
        console.log(yesOrNo.answer);
        
    } catch (error) {
        console.log(error);
    }
}

getYesOrNo();



async function getYesOrNo(){ 
    try {
        const yesOrNoResponse = await fetch(`https://knajskdskj.jasdk`);
        console.log(yesOrNoResponse);
        const yesOrNo = await yesOrNoResponse.json();
        console.log(yesOrNo);
        
    } catch (error) {
        console.log("Fetchin the link went wrong");
    }
}

getYesOrNo();





//#3
let fourSecondTimeoutPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Hello');
    }, 4000);
});
fourSecondTimeoutPromise.then(promisMessage => {
    console.log(promisMessage);
});


let fourSecondTimeoutPromiseFailor = new Promise((resolve, reject)=> {
    setTimeout(() => {
        reject('Somethimg went wrong!');
    }, 4000);

});
fourSecondTimeoutPromiseFailor.then(promisMessage => {
    console.log(promisMessage);
}).catch(error => console.log(error));




fourSecondTimeoutPromise = new Promise((resolve, reject) => {
    const promisMessage = true;
    try{
        setTimeout(() => {
            if(promisMessage){
                resolve('Hello');
            }else {
                reject("promisMessage is failed!")
            }
        }, 4000);
    }
    catch(error){
        reject("some error happened: "+ error.message)
    }

});
fourSecondTimeoutPromise.then(promisMessage => {
    console.log(promisMessage);
}).catch(error => {
    console.log(error);
});





//#4

function getLoggedInUsers(){
    return new Promise((resolve, reject) => {
        const users = ['benna', 'magdy', 'carolina'];
        const promisMessage = Math.floor(Math.random() * 2) == 0 ? true: false;
        setTimeout(() =>{
            if(promisMessage){
               resolve(users);
            }else {
                reject("promisMessage is failed!");
            }
        }, 5000);  
    });  

}
getLoggedInUsers()
    .then(users => {
        console.log(users); 
    }).catch(error => {
        console.log(error);
});



