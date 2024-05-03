function taskMatchesDayAndPerson(dayValue, personId, task) {
    //her må vi også etter hvert legge inn en sjekk på alder når vi får det på plass
    if (task.done.status) return false;
    if (!task.responsible.includes(personId)) return false;
    if (task.dueDate == dayValue) return true;
    //Forsikring for at det ikke kræsjer:
    return false;
}

//returnerer id-en og alderen til den personen som er logga inn
function findThePerson() {
    for (let person of model.users) {
        if (person.username == model.inputs.login.username) {
            return {id: person.id, age: person.age};
        }
    }
}

function personAgeFitsTask(age,task) {
    if ((!task.ageLimit.from || age>=task.ageLimit.from) && (!task.ageLimit.to || age<=task.ageLimit.to)) return true;
    return false;
}

function priceFitsPerson(thePrice) {
    let thePerson = findThePerson();
    if (thePrice.registered.includes(thePerson.id)) return false;
    if (thePerson.age<thePrice.ageLimit.from || thePerson.age>thePrice.ageLimit.to) return false;
    if (thePrice.forOnePerson && thePrice.registered.length == 1) return false;
    return true;
}

function grabThisTask(thisTask) {
    let thePerson = findThePerson();
    let theIndex = -1;
    for (let j=0;j<model.tasks.length;j++) {
        if (model.tasks[j].Name == thisTask) {
            theIndex = j;
        }
    }
    model.tasks[theIndex].done.status = true;
    model.tasks[theIndex].done.byWho = thePerson.id;
    //model.tasks[theIndex].done.when = new Date().getDay()
    for (let i=0;i<model.users.length;i++) {
        if (model.users[i].id == thePerson.id) {
            model.users[i].points += model.tasks[theIndex].cost;
        }
    }
    updateView();
}

function grabThisPrize(thisPrize) {
    let thePerson = findThePerson();
    let theIndex = -1;
    for (let i=0;i<model.prizes.length;i++) 
    {
        if (model.prizes[i].Name == thisPrize) 
        {
            theIndex = i;
        }
    }
    for (let j=0;j<model.users.length;j++) 
    {
        if (model.users[j].id == thePerson.id && model.users[j].points >= model.prizes[theIndex].points) 
        {
            model.users[j].points = model.users[j].points - model.prizes[theIndex].points;
            model.prizes[theIndex].registered.push(thePerson.id);
        }
    }
    updateView();
}

function gotoTaskList() 
{
    model.app.currentPage = 'taskList';
    updateView();
}

function gotoPriceList() 
{
    model.app.currentPage = 'priceList';
    updateView();
}

function goToUserList()
{
    model.app.currentPage = 'userList';
    updateView();
}

function goToCalender()
{
    model.app.currentPage = 'calender';
    updateView();
}

function goToNewTask()
{
    model.app.currentPage = 'newTask';
    updateView();
}

function goToSettings()
{
    model.app.currentPage = 'settings';
    updateView();
}

function goToNewPrice()
{
    model.app.currentPage = 'newPrice';
    updateView();
}