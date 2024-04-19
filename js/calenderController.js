function calenderCreate() {
    //this creates a main containers for the calender
    let rectangleWidth = 100;
    let main = document.createElement('div');

    //here is some variables that finds out what days should bleed into the current month showcase
    let EndMonth = 0;
    let weekIndex = -1;

    let currentMonth = 0
    let currentYear = 0


    let year = BetterDateCalculation('year', currentYear)
    let month = BetterDateCalculation('month', currentMonth)

    let LastMonth = BetterDateCalculation('month', currentMonth - 1)
    let startOfWeekLastMonth = LastMonth[2] - month[3]
    let difference = startOfWeekLastMonth - LastMonth[2];

    //forloop to create the calender
    for (let index = difference; index <= 42 + difference; index ++) {
        if (index == 0) {index = 1;};

        //this part splits the days into weeks for visuals
        weekIndex++;
        if (weekIndex > 7 || weekIndex == 0) {
            container = document.createElement('div');
            container.style.width = rectangleWidth + 'px'; 

            container.id = 'week_nr: ' + BetterDateCalculation('week', 0, year, month[1] - 1, index)
            weekIndex = 1;
        }
        //this part makes a new div under the week, each week has 7 divs, and a month has 35 divs (including some of month before or after)
        let div = document.createElement('div');
        div.classList = 'MainCalenderSquares';
        
        //this part makes sure that if the month starts on another day than monday, or ends on another day then sunday, then the calender will take from the other months to fill inn.
        if (startOfWeekLastMonth < LastMonth[2]) {
            startOfWeekLastMonth++;
            div.textContent = startOfWeekLastMonth;
            div.style.color = 'grey';
            div.id = startOfWeekLastMonth + '.' + LastMonth[1] + '.' + year //might have to change year
        } else if (index > month[2]) {
            EndMonth++;
            div.id = EndMonth + '.' + BetterDateCalculation('month', currentMonth + 1)[1] + '.' + year //might have to change year
            div.textContent = EndMonth;
            div.style.color = 'grey';
        } else {
            div.textContent = index;
            div.id = index + '.' + month[1] + '.' + year //might have to change year
        }
        //nests everything together
        container.appendChild(div);
        main.appendChild(container);
    }
    return main;
}
//Type = 'day', 'week' 'month', 'year' 
// difference = pos or neg number
function BetterDateCalculation(type, difference, year, month, day) { 
    let date = new Date();
 
    const months = [
        ["Januar", 31],
        ["Februar", 28, 29],
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

    if (type === 'day') {
        date.setDate(date.getDate() + difference);
        let day = date.getDay();
        let DayList = [weekdays[day][0], date.getDate(), weekdays[day][1]];
        result = DayList;
      } else if (type === 'month') {
        date.setMonth(date.getMonth() + difference);

        let startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
        let FirstDayNumber = startOfMonth.getDay()
        if (isLeapYear(date.getFullYear()) && months[date.getMonth()][0] == "Februar") {
            console.log('leap')
            MonthNumber = months[date.getMonth()][2]
        } else {
            MonthNumber = months[date.getMonth()][1]
        }
        let MonthList = [months[date.getMonth()][0], (date.getMonth() + 1), MonthNumber, weekdays[FirstDayNumber][1]];
        result = MonthList;
      } else if (type === 'year') {
        date.setFullYear(date.getFullYear() + difference);
        result = date.getFullYear();
      } else if (type === 'week') {
        date = new Date(year, month, day);
        result = getWeekNumber(date);
      } 
    
      return result;
    }

//this worked so well that i just stole it, woops ;)
function getWeekNumber(NeededWeekDate) {
    // Copy date so it doesn't modify the original
    var dateCopy = new Date(NeededWeekDate);
    // Set the time to midnight to avoid time zone issues
    dateCopy.setHours(0, 0, 0);
    // Thursday in current week decides the year
    dateCopy.setDate(dateCopy.getDate() + 4 - (dateCopy.getDay() || 7));
    // Get the first day of the year
    var yearStart = new Date(dateCopy.getFullYear(), 0, 1);
    // Calculate the number of full weeks between the first day of the year and the input date
    var weekNumber = Math.ceil((((dateCopy - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
}

//i found out, its a leap year today, very sadge
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }