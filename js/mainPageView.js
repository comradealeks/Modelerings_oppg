function updateViewMainPage() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="logout()">Logout</button>
        <h1 class="center">App Name</h1>
        <div class="center">Du er logget inn som ${model.inputs.login.username}</div>
        ${makeCalenderWeek()}
        <div class="FamilyGoalMain">
            <div>The family goal is:</div>
            <div>empty</div>
        </div>
        <div class="ListDisplay">
            <div class="TaskList">${listOfAllTasks()}</div>
            <div class="UserList">${listOfUsersAndPoints()}</div>        
            <div class="PrizeList">${listOfPrices()}</div>
        </div>
        <div class="MainButtons">
            <button class="Button" onclick="updateViewNewTask()">New Task</button>
            <button class="Button" onclick="updateViewSettings()">Settings</button>
            <button class="Button" onclick="updateViewNewPrice()">New Prize</button>
        </div>
        <button onclick="ColorScheme()">ColorChange</button>
    `
}

function makeCalenderWeek() {
    //her skal det være mer avansert etter hvert
    const d = new Date();
    let weekDays = ['Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag','Søndag']
    let firstHtml = '';
    for (let i=0;i<weekDays.length;i++) {
        firstHtml+= `<th class="calender_date">${weekDays[(d.getDay()+i-1)%7]}</th>`
    }
    firstHtml = `<tr>${firstHtml}</tr>`

    //under her må vi finne på noe lurt:
    let tasksToDo = model.tasks;
    let secondHtml = '';
    let theLoggedIn = findThePerson();
    for (let j=0;j<weekDays.length;j++) {
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
    let userListHtml = `<tr><th class="ListHeadline">Users</th><th class="ListHeadline">Points</th></tr>`;
    for (let person of allUsers) {
        userListHtml += `<tr><td class="lists">${person.username}</td><td class="lists">${person.points}</td></tr>`
    }
    return `<table>${userListHtml}</table>`
}

function listOfAllTasks() {
    let allTasks = model.tasks;
    allTasks.sort(function(a,b) {return b.cost - a.cost;});
    let taskListHtml = `<tr><th class="ListHeadline">Tasks</th><th class="ListHeadline">Points</th></tr>`;
    //Under legges bare oppgavene som er for den innlogga brukeren til (sånn vi vil ha det sikkert??):
    for (let task of allTasks) {
        if (task.responsible.includes(findThePerson().id)) {
            taskListHtml += `<tr><td class="lists">${task.Name}</td><td class="lists">${task.cost}</td></tr>`
        }
    }
    return `<table>${taskListHtml}</table>`
}

function listOfPrices() {
    let thePrices = model.prizes;
    thePrices.sort(function(a,b) {return b.points - a.points;});
    let pricesHtml = `<tr><th class="ListHeadline">Prizes</th><th class="ListHeadline">Points</th></tr>`;
    //Under må vi etter hvert legge inn om brukeren har riktig alder for å kunne få premien
    for (let price of thePrices) {
        pricesHtml += `<tr><td class="lists">${price.Name}</td><td class="lists">${price.points}</td></tr>`
    }
    return `<table>${pricesHtml}</table>`
}