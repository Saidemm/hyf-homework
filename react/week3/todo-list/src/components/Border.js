import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

function Border({children}) {
    return(
        <ListGroup.Item variant="danger" className="Border" >
            {children}
        </ListGroup.Item>
    )
}

export default Border; 