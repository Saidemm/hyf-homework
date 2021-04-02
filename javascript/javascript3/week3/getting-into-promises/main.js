//fetching repositories using promis.all

const divElement = document.querySelector("#repoInfo")
let names = ['Hani-far', 'SlaviaF', 'islam-fawzy25'];
let requests = names.map(name => fetch(`https://api.github.com/search/repositories?q=user:${name}`));

function renderRepos(data){
    console.log(data);
    let reposHtml = data.reduce((htmlResult, userInfo) => {
        const repoFullName = userInfo.items[0].full_name;
        const repoUrl = userInfo.items[0].html_url;
        const repoOwnerName = userInfo.items[0].owner.login;
    
        return htmlResult += `
            <ul>
                <li>
                    ${repoOwnerName}
                    <ul>
                        <li>${repoFullName}</li>
                        <li>${repoUrl}</li>
                    </ul>
                </li>
            </ul>`;
    }, '');
    divElement.innerHTML = reposHtml;
}

Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(data => renderRepos(data));

       
    
    
