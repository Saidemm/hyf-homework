//Creating new scope
{
    const redBox = document.querySelector('ul.marks li:nth-child(1)');
    const blueBox = document.querySelector('ul.marks li:nth-child(2)');
    const greenBox = document.querySelector('ul.marks li:nth-child(3)');

    // Calculating x and y offsets for all circules
    const redOffsetLeft = parseInt(getComputedStyle(redBox).left);
    const redOffsetTop = parseInt(getComputedStyle(redBox).top);
    const blueOffsetLeft = parseInt(getComputedStyle(blueBox).left);
    const blueOffsetTop = parseInt(getComputedStyle(blueBox).top);
    const greenOffsetLeft = parseInt(getComputedStyle(greenBox).left);
    const greenOffsetTop =parseInt(getComputedStyle(greenBox).top);
    
    const redTarget = {x: 20 - redOffsetLeft, y: 300 - redOffsetTop};
    const blueTarget = {x: 400 - blueOffsetLeft, y: 300 - blueOffsetTop};
    const greenTarget = {x: 400 - greenOffsetLeft, y: 20 - greenOffsetTop};

    function translateOneByOneByPromise (){
        return Promise.resolve(moveElement(redBox, redTarget))
            .then(() => console.log("The red circle is in its target place now!"))
            .then(() => moveElement(blueBox, blueTarget))
            .then(() => console.log("The blue circle is in its target place now!"))
            .then(() => moveElement(greenBox, greenTarget))
            .then(() => console.log("The green circle is in its target place now!"));
    }

    // Alternatively with Async/Await
    async function translateOneByOneByAsyncAwait (){
        await moveElement(redBox, redTarget);
        console.log("The red circle is in its target place now!")
        await moveElement(blueBox, blueTarget);
        console.log("The blue circle is in its target place now!")
        await moveElement(greenBox, greenTarget);
        console.log("The green circle is in its target place now!")
    }
    
    function translateAllAtOnceByPromise(){
        return Promise.all (
                [moveElement(redBox, redTarget),
                moveElement(blueBox, blueTarget),
                moveElement(greenBox, greenTarget)]
            ).then(() => console.log("All these happy circles have been moved"));
    }

    // Alternatively with Async/Await
    async function translateAllAtOnceByAsyncAwait(){
        const redPromise = moveElement(redBox, redTarget);
        const bluePromise = moveElement(blueBox, blueTarget);
        const greenPromise = moveElement(greenBox, greenTarget);
        await redPromise;
        await bluePromise;
        await greenPromise;
        /* or alternatively replace 3 lines above with just one line below: 
        const finalResult = [await redPromise, await greenPromise, await bluePromise];*/
        console.log("All these happy circles have been moved")
    }

    // Change this flag to use Promise or Asynch/Await
    const applyPromise = true;
    console.log("Applying ",applyPromise?"promise":"async/await"," technique!");

    // To toggle between 2 ways by each page refresh
    const sequential_flag = "HF_js3w2_sequential_flag";
    const isSequential = localStorage.getItem(sequential_flag) == null ? true : !(localStorage.getItem(sequential_flag) == 'true');
    localStorage.setItem(sequential_flag, isSequential);
    if(isSequential){
        if(applyPromise){ // Using Promise technique
            translateOneByOneByPromise()
                .catch(e => console.log(e.message));
        }
        else{ // Using async/await technique
            translateOneByOneByAsyncAwait()
                .catch(e => console.log(e.message));
        }
    }
    else{
        if(applyPromise){ // Using Promise technique
            translateAllAtOnceByPromise()
                .catch(e => console.log(e.message));
        }
        else{ // Using async/await technique
            translateAllAtOnceByAsyncAwait()
                .catch(e => console.log(e.message));
        }
    }
}