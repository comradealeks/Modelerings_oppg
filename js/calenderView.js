function updateViewCalender() {
    
    document.getElementById("Model").innerHTML = /*HTML*/`
    <div id='MainCalender' class='MainCalender'>
    </div>
    `
    calenderCreate() 
}

function calenderCreate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let dato = date.getDate();

    const months = [
        ["Januar", 31],
        ["Februar", 28],
        ["Mars", 31],
        ["April", 30],
        ["Mai", 31],
        ["Juni", 30],
        ["Juli", 31],
        ["August", 31],
        ["September", 30],
        ["Oktober", 31],
        ["November", 30],
        ["Desember", 31],
    ];
    
    let rectangleWidth = 100
    const main = document.getElementById('MainCalender')
    let container = document.createElement('div');
    container.style.width = rectangleWidth + 'px';

    let index2 = 0
    for (let index = 1; index <= 35; index ++) {
        if ((index - 1) % 7 === 0 ) {
            console.log('woop')
            container = document.createElement('div');
            container.style.width = rectangleWidth + 'px';
            
        }
        let div = document.createElement('div');
        div.style.width = rectangleWidth + 'px';
        div.style.height = rectangleWidth + 'px';
        div.style.border = '2px solid black';
        if (index > months[month][1]) {
            index2++
            div.textContent = index2
            div.style.color = 'grey';
        } else {
            div.textContent = index;
        }

        main.appendChild(container)
        container.appendChild(div);
    }
}

// må legge til mulighet for å ha en annen startdag enn mandag for månedene
// up next, need to make it visually better, need to add month name, need to add date you are at, and need to add year, need to be able to switch between the months and need to be able to see week menu