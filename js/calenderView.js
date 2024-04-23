
function updateViewCalender() {
    document.getElementById("Model").innerHTML = /*HTML*/`
    <button class="logoutButton" onclick="backToMain()">Tilbake</button>
    <h1 class="center">${model.app.name}</h1>
    <div class="center">
        ${BetterDateCalculation('day', 0)[0]}, 
        ${BetterDateCalculation('day', 0)[1]},
        <div class="MainCalenderFlexWithButtons">
            <button onclick="changeMonth('backwards')"><-</button>
            <select class="center" id="monthSelector" onchange='changeMonth(this.value)'>
                ${monthOptions()}
            </select>
            <button onclick="changeMonth('forwards')">-></button>
        </div>
        <div class="MainCalenderFlexWithButtons">
            <button onclick="changeYear('backwards')"><-</button>
            <input class="center" type="number" value="${BetterDateCalculation('year', currentYear)}" onchange="changeYear(this.value)">
            <button onclick="changeYear('forwards')">-></button>
        </div>
    </div>
    <div class='MainCalender'>
        <div>
            <div class="MainCalenderDays">Mandag</div>
            <div class="MainCalenderDays">Tirsdag</div>
            <div class="MainCalenderDays">Onsdag</div>
            <div class="MainCalenderDays">Torsdag</div>
            <div class="MainCalenderDays">Fredag</div>
            <div class="MainCalenderDays">Lørdag</div>
            <div class="MainCalenderDays">Søndag</div>
        </div>
        ${calenderCreate().innerHTML}
    </div>
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

//legge til sånn at hvis du trykker på en rute så kommer du inn på ukes visning for den uken og får en tilbake knapp samt et view over alle oppgavene for den uken.
//legge til en måte å se oppgavene på måneds view
//darkmode colors