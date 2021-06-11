import React, { useState, useEffect, useRef } from 'react';
import UsersSearcher from './UsersSearcher.jsx';

export const UserContext = React.createContext({});

function UserSearcherProvider(){ 
    
    const [usersList, setUsersList] = useState([]);
    const [inputUser, setInputUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const lastInputUser = useRef(inputUser);

    useEffect(() =>{
        const fetchingGithubApi = async() => {
            const API_URL = `https://api.github.com/search/users?q=${inputUser}`
            try{
                setLoading(true);
                setError(null);
                //To make a delay to show loading a bit longer
                //const delay = ms => new Promise(res => setTimeout(res, ms));
                //await delay(5000);
                const apiData = await fetch(API_URL);
                if(apiData.ok){
                    const fetchedResult = await apiData.json();
                    const usersApi = fetchedResult.items;
                    setUsersList(() =>  usersApi)
                } else {
                    const errorResult = await apiData.json();
                    console.log('Error in fetching data: ', errorResult.message);
                    setError(errorResult);
                }
                setLoading(false);
            } catch(error){
                setError(error);
            }
        }
        if(inputUser !== null && inputUser !== "" && inputUser !== lastInputUser.current){
            fetchingGithubApi();
            lastInputUser.current = inputUser;
        }
    }, [inputUser, lastInputUser]);
    
    if(loading){console.log('loading is: ', loading)}
    
    return (
        <UserContext.Provider value = {{usersList: usersList, inputUser: inputUser, setInputUser: setInputUser, loading: loading, error: error}}>
            <UsersSearcher />
        </UserContext.Provider>
    )
};

export default UserSearcherProvider;