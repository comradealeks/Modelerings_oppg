function updateViewLogin() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        Brukernavn:<br/>
        <input
            type = "text"
            onchange = "model.inputs.login.username = this.value"
            value = ${model.inputs.login.username ?? ''} 
        /><br/>
        Passord:<br/>
        <input
            type = "password"
            onchange = "model.inputs.login.password = this.value"
            value = ${model.inputs.login.password ?? ''} 
        /><br/>
        <div>${model.inputs.login.errorMessage ?? ''}</div>
        <button onclick="login()">Logg inn</button>
    `
}