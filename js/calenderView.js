
function updateViewCalender() {
    document.getElementById("Model").innerHTML = /*HTML*/`
    
    <h1 class="center">${model.app.name}</h1>
    <div class="center">${months[month][0]}, ${weekdays[day][0]} ${dato}, ${year}</div>
    <div class='MainCalender'>
        ${calenderCreate().innerHTML}
    </div>
    `
}


// up next, need to make it visually better, 
//need to add day, month and year
//need to be able to switch between the months and need to be able to see week menu