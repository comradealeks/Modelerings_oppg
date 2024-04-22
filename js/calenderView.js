
function updateViewCalender() {
    document.getElementById("Model").innerHTML = /*HTML*/`
    <button class="logoutButton" onclick="backToMain()">Tilbake</button>
    <h1 class="center">${model.app.name}</h1>
    <div class="center">
        <div class="MainCalenderFlexWithButtons">
            <button onclick="changeMonth('backwards')"><-</button>
            <select id="monthSelector" onchange='changeMonth(this.value)'>
                ${monthOptions()}
            </select>
            
            <button onclick="changeMonth('forwards')">-></button>
        </div>
        ${BetterDateCalculation('day', 0)[0]}, 
        ${BetterDateCalculation('day', 0)[1]},
        ${BetterDateCalculation('year', currentYear)}
    </div>
    <div class='MainCalender'>${calenderCreate().innerHTML}</div>
    `
}

function monthOptions() {
    let html = ''
    let monthList = calculateMonthNumber()
    for (let index = 0; index < 12; index++){

        if (monthList[index][1] == currentMonth) {
            html +=`<option value="`+ monthList[index][1] +`"' selected>` + monthList[index][0] + `</option>`
        } else {
            html +=`<option value="`+ monthList[index][1] +`"' >` + monthList[index][0] + `</option>`
        }
    }
    return html
}

//legge til sånn at du kan finne måneden igjennom en dropp down meny (denne er gjort, må gjøre neste nå)
//gjøre det samme som over for år
//legge til sånn at hvis du trykker på en rute så kommer du inn på ukes visning for den uken og får en tilbake knapp samt et view over alle oppgavene for den uken.
//legge til en måte å se oppgavene på måneds view
//legge til farger på kalenderen
//legge til egen farge for dagen i dag og lørdag og søndag