import React, {useState, useEffect } from 'react';



export default function WatchCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("calling use effect")
        const timerId = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearTimeout(timerId);
    });

    return  <span>You have used {count} seconds on this website</span>;
}