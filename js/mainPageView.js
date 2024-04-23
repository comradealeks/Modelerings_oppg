function updateViewMainPage() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="logout()">Logg ut</button>
        <h1 class="center">${model.app.name}</h1>
        <div class="center">Du er logget inn som ${model.inputs.login.username}</div>
        <div class="calenderButton">
            <button class="Button" onclick="updateViewCalender()">Måneds kalenderen</button>
        </div>
        <div>${makeCalenderWeek()}</div>
        <div class="FamilyGoalMain" }>
            <div>Familiens mål er:</div>
            <div>Tomt</div>
        </div>
        <div class="MainButtons">
            <button class="Button" onclick="gotoTaskList()">Full Oppgave Liste</button>
            <button class="Button" onclick="goToUserList()">Full Bruker Liste</button>
            <button class="Button" onclick="gotoPriceList()">Full Premie Liste</button>
        </div>
        <div class="ListDisplay">
            <div class="TaskList">${listOfAllTasks()}</div>
            <div class="UserList">${listOfUsersAndPoints()}</div>        
            <div class="PrizeList">${listOfPrices()}</div>
        </div>
        <div class="MainButtons">
            <button class="Button" onclick="updateViewNewTask()">Ny oppgave</button>
            <button class="Button" onclick="updateViewSettings()">Instillinger</button>
            <button class="Button" onclick="updateViewNewPrice()">Ny premie</button>
        </div>
    `
}

function makeCalenderWeek() {
    const d = new Date();
    let firstHtml = '';
    for (let i=0;i<model.weekdays.length;i++) {
        firstHtml+= `<th class="calender_date">${model.weekdays[(d.getDay()+i-1)%7]}</th>`
    }
    firstHtml = `<tr>${firstHtml}</tr>`

    //under her må vi finne på noe lurt:
    let tasksToDo = model.tasks;
    let secondHtml = '';
    let theLoggedIn = findThePerson();
    for (let j=0;j<model.weekdays.length;j++) {
        let cellHtml = '';
        for (let k=0;k<tasksToDo.length;k++) {
            if (taskMatchesDayAndPerson((d.getDay()+j-1)%7,theLoggedIn.id,tasksToDo[k]) && personAgeFitsTask(theLoggedIn.age,tasksToDo[k])) {
                cellHtml += `<div>${tasksToDo[k].Name}<br/>Poeng: ${tasksToDo[k].cost}</div><br/>`
            }
        }
        secondHtml += `<td class="calender_task">${cellHtml}</td>`
    }
    secondHtml = `<tr>${secondHtml}</tr>`;
    firstHtml = firstHtml + secondHtml;
    return /*HTML*/`<table class="calender">${firstHtml}</table>`
}

//legge inn style som i kalenderen for de tre funksjonene under:
function listOfUsersAndPoints() {
    let allUsers = model.users;
    allUsers.sort(function(a,b) {return b.points - a.points;});
    let userListHtml = `<tr><th class="ListHeadline">Brukere</th><th class="PointListHeadline">Poeng</th></tr>`;
    for (let person of allUsers) {
        userListHtml += `<tr><td class="lists">${person.username}</td><td class="Pointlists">${person.points}</td></tr>`
    }
    return `<table>${userListHtml}</table>`
}
function listOfAllTasks() {
    let allTasks = model.tasks;
    allTasks.sort(function(a,b) {return b.cost - a.cost;});
    let taskListHtml = `<tr><th class="ListHeadline">Oppgaver</th><th class="PointListHeadline">Poeng</th></tr>`;
    for (let task of allTasks) 
    {
        if (task.responsible.includes(findThePerson().id) && !task.done.status) 
        {
            taskListHtml += `<tr><td class="lists"><input type="checkbox" value="${task.Name}" onchange="grabThisTask(this.value)"/>${task.Name}</td><td class="Pointlists">${task.cost}</td></tr>`
        }
    }
    return `<table>${taskListHtml}</table>`
}


function listOfPrices() {
    let thePrices = model.prizes;
    thePrices.sort(function(a,b) {return b.points - a.points;});
    let pricesHtml = `<tr><th class="ListHeadline">Premier</th><th class="PointListHeadline">Poeng</th></tr>`;
    for (let price of thePrices) 
    {
        if (priceFitsPerson(price)) 
        {
            pricesHtml += `<tr><td class="lists"><input type="checkbox" value="${price.Name}" onchange="grabThisPrize(this.value)"/>${price.Name}</td><td class="Pointlists">${price.points}</td></tr>`
        }       
    }
    return `<table>${pricesHtml}</table>`
}
