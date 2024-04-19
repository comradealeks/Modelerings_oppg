function updateViewTaskList() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="backToMain()">Tilbake</button>
        <h1 class="center">${model.app.name}</h1>
        <div>${makeFullTaskList()}</div>
    `;
}

function makeFullTaskList() 
{
    let html = '';
    if (findTypeFromUsername(model.inputs.login.username) == 'superuser') 
    {
        html += `<tr>
                    <th class="ListHeadline">Oppgaver</th>
                    <th class="PointListHeadline">Poeng</th>
                    <th class="ListHeadline">Slett oppgaven</th>
                </tr>`
        for (let task of model.tasks)
        {
            // task.Name kan inneholde mellomrom så vi setter inn `` rundt variabelen.
            html += `<tr>
                        <td class="lists">${task.Name}</td>
                        <td class="Pointlists">${task.cost}</td>
                        <td class="lists"><button class="Button" onclick="deleteTask(\`${task.Name}\`)">Slett</button></td>
                    </tr>`
        }
    }
    else 
    {
        html += `<tr>
                    <th class="ListHeadline">Oppgaver</th>
                    <th class="PointListHeadline">Poeng</th>
                </tr>`
        for (let task of model.tasks) 
        {
            html += `<tr>
                        <td class="lists">${task.Name}</td>
                        <td class="Pointlists">${task.cost}</td>
                    </tr>`
        }
    }
    return `<table>${html}</table>`;
}
