function makeCalenderWeek() {
    //her skal det være mer avansert etter hvert
    const d = new Date();
    let weekDays = ['Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag','Søndag']
    let firstHtml = '';
    for (let i=0;i<weekDays.length;i++) {
        firstHtml+= `<th>${weekDays[(d.getDay()+i-1)%7]}</th>`
    }
    firstHtml = `<tr>${firstHtml}</tr>`

    //under her må vi finne på noe lurt:
    firstHtml += /*HTML*/`<tr><td>oppg 1</td><td></td><td>oppg 2</td><td>${model.tasks[0].Name}</td><td></td><td></td><td></td></tr>`
    return /*HTML*/`<table>${firstHtml}</table>`
}