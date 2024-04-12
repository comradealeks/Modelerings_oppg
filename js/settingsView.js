function updateViewSettings()
{
    document.getElementById("Model").innerHTML = /*HTML*/`
    <div class="center">
        <div>
            <input type="color">
            <br/>
            <button onclick="showTextField('email')">Change Email</button>
            <br/>
            <button onclick="showTextField('password')">Change Password</button>
            <br/>
            <button onclick="showTextField('username')">Change Username</button>
            <br/>
        </div>
        <div>
            <button onclick="showTextField('Family Goal')">Change Family Goal</button>
        </div>
    </div>
    `;
}


/*
        Gammelt passord:
        <input type=password>
        Nytt passord:
        <input type=password>
        Nytt passord igjen:
        <input type=password>

alle:
passord
epost

superuser:
...?

*/