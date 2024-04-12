function updateViewSettings()
{
    document.getElementById("Model").innerHTML = /*HTML*/`
    <div>
        Epost:
        <br/>
        <input
            type = text
            value = ""
        />
        <br/>
        Gammelt passord:
        <br/>
        <input type=password>
        <br/>
        Nytt passord:
        <br/>
        <input type=password>
        <br/>
        Nytt passord igjen:
        <br/>
        <input type=password>
        <br/>
        <button onclick="saveSettings()">Lagre</button>
    </div>
    `;
}

/*
alle:
passord
epost

superuser:
...?

*/