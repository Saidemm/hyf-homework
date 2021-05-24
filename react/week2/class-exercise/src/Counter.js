import React, { useState, useEffect } from 'react';
import ".index.css"

export function AppW() {
    return (
        <div>
            <WatchCount></WatchCount>
        </div>
    )
}

function WatchCount() {
    console.log("Call watchCount")
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        console.log("calling use effect")
        const timerId = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => { // called right before the next useEffect
            console.log("clean up function")
            clearTimeout(timerId);
        }
    }, [count]);

    function decrement() {

        setCount(prev => prev - 1); // this will execute WatchCount
        console.log("call decrement")
    }
    function reset() {
        setCount(0);
    }

    return (
        <div className="watchcount">
            {count}
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    );
}