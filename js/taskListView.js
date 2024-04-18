function updateViewTaskList() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="backToMain()">Tilbake</button>
        <h1 class="center">${model.app.name}</h1>
        <div>${makeFullTaskList()}</div>
    `
}
//over i diven: Legge inn ${assignColor('taskList', 'listList')} eller lignende.


function makeFullTaskList() 
{
    let html = '';
    if (findTypeFromUsername(model.inputs.login.username) == 'superuser') 
    {
        //linjene under: Legge inn ${assignColor('taskList', 'listHeadder')} eller noe i den dur?
        html += `<tr>
                    <th class="ListHeadline">Oppgaver</th>
                    <th class="PointListHeadline">Poeng</th>
                    <th class="ListHeadline">Slett oppgaven</th>
                </tr>`
        for (let task of model.tasks) 
        {
            html += `<tr>
                        <td class="lists">${task.Name}</td>
                        <td class="Pointlists">${task.cost}</td>
                        <td><button class="Button" onclick="deleteTask(${task.Name})">Slett</button></td>
                    </tr>`
        }
    }
    else 
    {
        //linjene under: Legge inn ${assignColor('taskList', 'listHeadder')} ?
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
    return `<table>${html}</table>`
}

