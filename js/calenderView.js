
function updateViewCalender() {
    document.getElementById("Model").innerHTML = /*HTML*/`
    
    <h1 class="center">${model.app.name}</h1>
    <div class="center">${BetterDateCalculation('month', 0)}, ${BetterDateCalculation('day', 0)}, ${BetterDateCalculation('year', 0)}</div>
    <div class='MainCalender'>
        ${calenderCreate().innerHTML}
    </div>
    `
}


// up next, need to make it visually better, 
//need to add date for each number
//need to be able to switch between the months and need to be able to see week menu