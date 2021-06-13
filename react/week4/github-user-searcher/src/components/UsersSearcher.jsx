import React, { useContext } from 'react';
import DisplayUser from './DisplayUser.jsx';
import {UserContext} from './UserSearcherProvider.jsx';

function UsersSearcher(){
    const userContext = useContext(UserContext);
    console.log('2. Rendering and loading value is: ', userContext.loading);

    return(
        <div>
            <input className="input" type="text" 
                onChange= {(e) => userContext.setInputUser(e.target.value)}
                placeholder="Search for GitHub username"/>
                
            {!userContext.loading && userContext.error === null && userContext.usersList.length > 0 &&
                <div>
                    {userContext.usersList.map((user) =>
                        <DisplayUser key={user.id} name={user.login} url={user.html_url} />)}  
                </div>
            }
            {!userContext.loading && userContext.error === null && userContext.usersList.length === 0 &&
                <div>
                    No Result!
                </div>
            }
            {userContext.loading && userContext.error === null && 
                <div>
                    Loading ....
                </div>
            }
            {userContext.error !== null && 
                <div>
                    {userContext.error.message}
                </div>
            }
        </div>
    )  
};

export default UsersSearcher;