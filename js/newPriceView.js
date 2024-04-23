function updateViewNewPrice() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="backToMain()">Tilbake</button>
        <div class="center">
            <h1>${model.app.name}</h1>
            Navn på premie:<br/>
            <input
                type = "text"
                onchange = "model.inputs.addPrize.Name = this.value"
                value = "${model.inputs.addPrize.Name ?? ''}" 
            /><br/>
            Aldersgrense (Valgfritt):<br/>
            Fra:
            <br/>
            <input
                type = "number"
                onchange = "model.inputs.addPrize.ageLimit.from = this.value"
                value = "" 
            />
            <br/>
            Til:
            <br/>
            <input
                type = "number"
                onchange = "model.inputs.addPrize.ageLimit.to = this.value"
                value = "" 
            />
            <br/>
            Poeng som trengs for å få premien:<br/>
            <input
                type = "number"
                onchange = "model.inputs.addPrize.points = this.value"
                value = "${model.inputs.addPrize.points ?? ''}" 
            /><br/>
            Er premien for én person eller for flere (hele familien)?<br/>
            <select onchange="prizeType(this.value)">
                <option selected disable hidden>Gjør ditt valg</option>
                <option>For én person</option>
                <option>For flere personer</option>
            </select><br/>
            Er premien for en spesifikk dag (Valgfritt)?<br/>
            <select onchange="model.inputs.addPrize.deadline = this.value">
                <option selected disabled hidden>ingen</option>
                ${makeDaySelector()}
            </select><br/>
            <div style="color: red">${model.inputs.addPrize.errorMessage ?? ''}</div>
            <button class="Button" onclick="saveNewPrize()">Lagre ny premie</button>
        </div>    
    `
}

//OBS: funksjonen makeDaySelector som er brukt over er henta fra newTaskView.js


