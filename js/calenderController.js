//these are very needed variables... a bit weird placement but they are important
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let dato = date.getDate();

let startOfMonth = new Date(year, month, 1)
let dayOfStart = startOfMonth.getDay()

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
const weekdays = [
    ["Søndag", 6],
    ["Mandag", 0],
    ["Tirsdag", 1],
    ["Onsdag", 2],
    ["Torsdag", 3],
    ["Fredag", 4],
    ["Lørdag", 5],
];

function calenderCreate() {
    //this creates a main containers for the calender
    let rectangleWidth = 100;
    let main = document.createElement('div');

    //here is some variables that finds out what days should bleed into the current month showcase
    let EndMonth = 0;
    let StartMonth = months[month - 1][1] - weekdays[dayOfStart][1];
    let weekIndex = -1;
    let difference = StartMonth - months[month - 1][1];

    //forloop to create the calender
    for (let index = difference; index <= 35 + difference; index ++) {
        if (index == 0) {index = 1;};

        //this part splits the days into weeks for visuals
        weekIndex++;
        if (weekIndex > 7 || weekIndex == 0) {
            container = document.createElement('div');
            container.style.width = rectangleWidth + 'px'; 
            weekIndex = 1;
        }
        //this part makes a new div under the week, each week has 7 divs, and a month has 35 divs (including some of month before or after)
        let div = document.createElement('div');
        div.classList = 'MainCalenderSquares';
        
        //this part makes sure that if the month starts on another day than monday, or ends on another day then sunday, then the calender will take from the other months to fill inn.
        if (StartMonth < months[month - 1][1]) {
            div.textContent = StartMonth;
            div.style.color = 'grey';
            StartMonth++;
        } else if (index > months[month][1]) {
            EndMonth++;
            div.textContent = EndMonth;
            div.style.color = 'grey';
        } else {
            div.textContent = index;
        }
        //nests everything together
        container.appendChild(div);
        main.appendChild(container);
    }
    return main;
}