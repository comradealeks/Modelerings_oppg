function updateViewPriceList() {
    document.getElementById("Model").innerHTML = /*HTML*/`
        <button class="logoutButton" onclick="backToMain()">Tilbake</button>
        <h1 class="center">${model.app.name}</h1>
        <div>${makeFullPriceList()}</div>
    `
}

function makeFullPriceList() 
{
    let html = '';
    //funksjonen findTypeFromUsername() ligger i taskListController.js
    if (findTypeFromUsername(model.inputs.login.username) == 'superuser') 
    {
        html += `<tr>
                    <th class="ListHeadline">Premier</th>
                    <th class="PointListHeadline">Poeng</th>
                    <th class="ListHeadline">Har tatt premien</th>
                    <th class="ListHeadline">Slett premien</th>
                </tr>`
        for (let price of model.prizes) 
        {
            html += `<tr>
                        <td class="lists">${price.Name}</td>
                        <td class="Pointlists">${price.points}</td>
                        ${priceParticipants(price)}
                        <td class="lists"><button class="Button" onclick="deletePrice(\`${price.Name}\`)">Slett</button></td>
                    </tr>`
        }
    }
    else 
    {
        html += `<tr>
                    <th class="ListHeadline">Premier</th>
                    <th class="PointListHeadline">Poeng</th>
                    <th class="ListHeadline">Har tatt premien</th>
                </tr>`
        for (let price of model.prizes) 
        {
            html += `<tr>
                        <td class="lists">${price.Name}</td>
                        <td class="Pointlists">${price.points}</td>
                        ${priceParticipants(price)}
                    </tr>`        
        }    
    }
    return `<table>${html}</table>`
}

function priceParticipants(thePrice) {
    let theText = '';
    if (thePrice.registered.length == 1) 
    {
        theText += findUsernameByPersonId(thePrice.registered[0])
    }
    else if (thePrice.registered.length > 1) 
    {
        theText += findUsernameByPersonId(thePrice.registered[0])
        for (let i=1; i<thePrice.registered.length-1;i++)
        {
            theText += ', '+findUsernameByPersonId(thePrice.registered[i])
        }
        theText += ' og '+findUsernameByPersonId(thePrice.registered[thePrice.registered.length-1])
    }
    return `<td class="lists">${theText}</td>`
}