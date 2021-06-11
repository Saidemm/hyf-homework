import React, { useContext } from 'react';
import DisplayUser from './DisplayUser.jsx';
import {UserContext} from './UserSearcherProvider.jsx';

function UsersSearcher(){
    const ctxObj = useContext(UserContext);
    console.log('2. Rendering and loading value is: ', ctxObj.loading);

    return(
        <div>
            <input className="input" type="text" 
                onChange= {(e) => ctxObj.setInputUser(e.target.value)}
                placeholder="Search for GitHub username"/>
                
            {!ctxObj.loading && ctxObj.error === null && ctxObj.usersList.length > 0 &&
                <div>
                    {ctxObj.usersList.map((user) =>
                        <DisplayUser key={user.id} name={user.login} url={user.html_url} />)}  
                </div>
            }
            {!ctxObj.loading && ctxObj.error === null && ctxObj.usersList.length === 0 &&
                <div>
                    No Result!
                </div>
            }
            {ctxObj.loading && ctxObj.error === null && 
                <div>
                    Loading ....
                </div>
            }
            {ctxObj.error !== null && 
                <div>
                    {ctxObj.error.message}
                </div>
            }
        </div>
    )  
};

export default UsersSearcher;