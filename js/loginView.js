function updateViewLogin() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <div class="UserLogin">
            <h1>App Name</h1>
            Brukernavn:<br/>
            <input
                type = "text"
                onchange = "model.inputs.login.username = this.value"
                value = "${model.inputs.login.username ?? ''}" 
            /><br/>
            Passord:<br/>
            <input
                type = "password"
                onchange = "model.inputs.login.password = this.value"
                value = "${model.inputs.login.password ?? ''}" 
            /><br/>
            <div style="color: red">${model.inputs.login.errorMessage ?? ''}</div>
            <button onclick="login()">Logg inn</button>
            <button onclick="goToNewUser()">Lag ny bruker</button>
        </div>
    `
}