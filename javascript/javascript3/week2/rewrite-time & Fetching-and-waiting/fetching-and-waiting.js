// The 3 steps:
// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api

const url = `https://dog.ceo/api/breeds/image/random`;

//Via promise
function fetchWithTimeoutUsingPromise(){
    return new Promise (resolve =>{
        setTimeout(() => {
            console.log("Done waiting 3 sec in promise!");
            resolve(fetch(url)
                .then(result => result.json()));
        }, 3000);
    }); 
}

fetchWithTimeoutUsingPromise()
    .then(data => console.log("Promise result: ", data))
    .catch(e => console.log(e.message));

//Via async/await
async function fetchWithTimeoutUsingAsyncAwait (){
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Done waiting 3 sec in async-await!");
    const fetchUrl = await fetch(url);
    const resultFetch = await fetchUrl.json();
    return resultFetch;
}

fetchWithTimeoutUsingAsyncAwait()
    .then(data => console.log("Async/await result: ",data))
    .catch(e => console.log(e.message));