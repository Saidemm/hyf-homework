import React, { useContext } from 'react';
import Result from './Result';

const UserContext = React.createContext()

function FetchUsers({Users}){
    const userContext = useContext(UserContext);
    <UserContext.Provider value={Users}>
        <Result/>
    </UserContext.Provider>

}

export default FetchUsers;