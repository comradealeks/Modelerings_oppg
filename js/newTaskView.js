function updateViewNewTask() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <div>
            <h1>App Name</h1>
            Navn på appgave:<br/>
            <input
                type = "text"
                onchange = "model.inputs.addTask.name = this.value"
                value = "" 
            /><br/>
            Aldersgrense (optional og du kan også fylle inn bare den ene):<br/>
            Fra:
            <input
                type = "number"
                onchange = "model.inputs.register.ageLimit.from = this.value"
                value = "" 
            />
            Til:
            <input
                type = "number"
                onchange = "model.inputs.register.ageLimit.to = this.value"
                value = "" 
            /><br/>
            Siste frist (optional):<br/>
            <select onchange="model.inputs.register.dueDate = this.value">
                <option selected disabled hidden> Choose user day</option>
                ${makeDaySelector()}
            </select><br/>
            Poeng å få for oppgaven:<br/>
            <input
                type = "number"
                onchange = "model.inputs.register.cost = this.value"
                value = "" 
            /><br/>
            Ansvarlige for oppgaven (optional):<br/>

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

//ikke ferdig med denne (Karl Morten, fredag 12/4):
function makeresponsibleSelector() {
    let familyUsers = model.users;
    let resHtml = '';
    for (let user of familyUsers) {
        resHtml += `<input type="checkbox" value="${user.id}"/><label>${user.username}</label>`
    }
}