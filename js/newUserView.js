function updateViewNewUser() {
    //HUGS: må også ha et input-felt med alder til brukeren
    document.getElementById("Model").innerHTML = /*HTML*/`
        User type:<br/>
        <select onchange="model.inputs.register.type = this.value">
            <option selected disabled hidden> Choose user type </option>
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
        Rewrite Passord:<br/>
        <input
            type = "password"
            onchange = "model.inputs.register.password2 = this.value"
            value = "" 
        /><br/>
        email:<br/>
        <input
            type = "email"
            onchange = "model.inputs.register.email = this.value"
            value = "" 
        /><br/>
        <div style="color: red">${model.inputs.register.errorMessage ?? ''}</div>
        <button onclick="SaveNewUser()">Save</button>
        `
    
}
