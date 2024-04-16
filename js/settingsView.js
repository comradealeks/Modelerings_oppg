function updateViewSettings(){
    color = currentColor()
    document.getElementById("Model").innerHTML = /*HTML*/`
    <button class="logoutButton" onclick="backToMain()">Tilbake</button>
    <div class="center">
        <h1>${model.app.name}</h1>
        <div>
        <h3>User settings</h3>
            <div class="settingsColorChange">
                User Color
                <br/>
                <input type="color" value="${color}" onchange="colorChange(this.value)">
            </div>

            <button onclick="ColorScheme()" class="settingsButton">Change to ${model.app.colorMode} mode</button>
            <br/>
            <button onclick="showTextField('email')" class="settingsButton">Change Email</button>
            <br/>
            <button onclick="showTextField('password')" class="settingsButton">Change Password</button>
            <br/>
            <button onclick="showTextField('username')" class="settingsButton">Change Username</button>
            <br/>
        </div>
        <h3>Superuser settings</h3>
        <div>
            
            <button onclick="showTextField('Family Goal')" class="settingsButton">Change Family Goal</button>
        </div>
    </div>
    `;
}