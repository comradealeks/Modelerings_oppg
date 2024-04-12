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
            
        </div>
    `
}