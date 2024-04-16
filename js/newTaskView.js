function updateViewNewTask() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="backToMain()">Tilbake</button>
        <div class="center">
            <h1>${model.app.name}</h1>
            
            Navn på oppgave:<br/>
            <input
                type = "text"
                onchange = "model.inputs.addTask.name = this.value"
                value = "" 
            /><br/>
            Hvor ofte skal oppgaven utføres?<br/>
            <select onchange="model.inputs.addTask.type.push(this.value)">
                <option selected disabled hidden>Velg gjentagelse</option>
                ${howOften()}
            </select><br/>
            Aldersgrense:<br/>
            Fra:
            <br/>
            <input
                type = "number"
                onchange = "model.inputs.addTask.ageLimit.from = this.value"
                value = "" 
            />
            <br/>
            Til:
            <br/>

            <input
                type = "number"
                onchange = "model.inputs.addTask.ageLimit.to = this.value"
                value = "" 
            />
            <br/>
            Siste frist (valgfritt):<br/>
            <select onchange="model.inputs.addTask.dueDate = this.value">
                <option selected disabled hidden>Ingen</option>
                ${makeDaySelector()}
            </select><br/>
            Poeng å få for oppgaven:<br/>
            <input
                type = "number"
                onchange = "model.inputs.addTask.cost = this.value"
                value = "" 
            /><br/>
            <div> Ansvarlige for oppgaven (valgfritt):</div>
            <div class="NewTaskList">
                ${makeresponsibleSelector()}
            </div>
            <div style="color: red">${model.inputs.addTask.errorMessage ?? ''}</div>
            <button class="Button" onclick="saveNewTask()">Lagre Ny Oppgave</button>
        </div>
    `
}

function makeDaySelector() {
    dayHtml = '';
    for (let i=0;i<model.weekdays.length;i++) {
        dayHtml += `<option>${model.weekdays[i]}</option>`;
    }
    return dayHtml;
}

function makeresponsibleSelector() {
    let familyUsers = model.users;
    let resHtml = '';
    for (let user of familyUsers) {
        resHtml += `
        <input type="checkbox" value="${user.id}" onchange = "model.inputs.addTask.responsible.push(this.value)" /><label>${user.username}</label>
        <br/>
        `
    }
    return resHtml;
}

function howOften() {
    oftenHtml = '';
    for (let i=0;i<model.taskTypes.length;i++) {
        oftenHtml += `<option>${model.taskTypes[i]}</option>`;
    }
    return oftenHtml;
}