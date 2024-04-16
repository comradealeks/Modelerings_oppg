function updateViewNewUser() {
    //HUGS: må også ha et input-felt med alder til brukeren
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="logout()">Tilbake</button>
        <div class="UserLogin">
            <h1>${model.app.name}</h1>
            User type:<br/>
            <select onchange="model.inputs.register.type = this.value">
                <option selected disabled hidden>Velg bruker type</option>
                <option> ${model.UserType[0]} </option>
                <option> ${model.UserType[1]} </option>
                <option> ${model.UserType[2]} </option>
                <option> ${model.UserType[3]} </option>
            </select><br/>
            Navn:<br/>
            <input
                type = "text"
                onchange = "model.inputs.register.name = this.value"
                value = "" 
            /><br/>
            Brukernavn:<br/>
            <input
                type = "text"
                onchange = "model.inputs.register.username = this.value"
                value = "" 
            /><br/>
            Passord:<br/>
            <input
                type = "password"
                onchange = "model.inputs.register.password = this.value"
                value = "" 
            /><br/>
            Passord (igjen):<br/>
            <input
                type = "password"
                onchange = "model.inputs.register.password2 = this.value"
                value = "" 
            /><br/>
            Alder:<br/>
            <input
                type = "number"
                onchange = "model.inputs.register.age = this.value"
                value = "" 
            /><br/>
            Email:<br/>
            <input
                type = "email"
                onchange = "model.inputs.register.email = this.value"
                value = "" 
            /><br/>
            <div style="color: red">${model.inputs.register.errorMessage ?? ''}</div>
            <button onclick="SaveNewUser()">Lagre</button>
        </div>
        `
    
}
