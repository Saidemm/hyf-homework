import React, { useContext } from 'react';

function Result(){
    const user = useContext(userContext);
    return (
       <input type="text" onChange= {(e) => user.filter(item => item == e.target.value )}/> 
    )

};


export default Result;