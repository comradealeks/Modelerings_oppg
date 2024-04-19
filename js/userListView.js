function updateViewUserList() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="backToMain()">Tilbake</button>
        <h1 class="center">${model.app.name}</h1>
        <div>${makeFullUserList()}</div>
    `;
}


function makeFullUserList() 
{
    let html = '';
    //funksjonen findTypeFromUsername() ligger i taskListController.js
    if (findTypeFromUsername(model.inputs.login.username) == 'superuser')
    {
        html += `<tr>
                    <th class="ListHeadline">Navn</th>
                    <th class="ListHeadline">Brukernavn</th>
                    <th class="ListHeadline">Alder</th>
                    <th class="ListHeadline">Email</th>
                    <th class="PointListHeadline">Poeng</th>
                    <th class="ListHeadline">Slett bruker</th>
                </tr>`
        for (let user of model.users)
        {
            html += `<tr>
                        <td class="lists">${user.name}</td>
                        <td class="lists">${user.username}</td>
                        <td class="lists">${user.age}</td>
                        <td class="lists">${user.email}</td>
                        <td class="Pointlists">${user.points}</td>
                        <td class="lists"><button class="Button" onclick="deleteUser(\`${user.username}\`)">Slett</button></td>
                    </tr>`
        }        
    }
    else
    {
        html += `<tr>
                    <th class="ListHeadline">Navn</th>
                    <th class="ListHeadline">Brukernavn</th>
                    <th class="ListHeadline">Alder</th>
                    <th class="ListHeadline">Email</th>
                    <th class="PointListHeadline">Poeng</th>
                </tr>`
        for (let user of model.users)
        {
            html += `<tr>
                        <td class="lists">${user.name}</td>
                        <td class="lists">${user.username}</td>
                        <td class="lists">${user.age}</td>
                        <td class="lists">${user.email}</td>
                        <td class="Pointlists">${user.points}</td>
                    </tr>`
        } 
    }
    return `<table>${html}</table>`;
}