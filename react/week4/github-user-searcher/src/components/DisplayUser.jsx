import React from 'react';

function DisplayUser(props) {

    return (
        <div>
            <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
        </div>
    )      
}

export default DisplayUser;