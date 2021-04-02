
function promisesAfterSetTime(resolveAfter){
    return new Promise(resolve => setTimeout(resolve, resolveAfter* 1000));
}


promisesAfterSetTime(8).then(() => {
    console.log("I am called asynchronously"); 
});

// Also another short alternative solution:
/* const prmisesAfterSetTime = resolveAfter => new Promise(resolve => setTimeout(resolve, resolveAfter));

prmisesAfterSetTime(8* 1000).then(() => console.log("I am called asynchronously")).catch(failureCallback); */


async function promisesAfterSetTime(resolveAfter){
    try{
        await new Promise(resolve => setTimeout(resolve, resolveAfter * 1000));
    } catch (error) {
        console.log("Something went wrong");
    }
}
promisesAfterSetTime(10).then(() => {
    console.log("Hey, I am called asynchronously"); 
});




