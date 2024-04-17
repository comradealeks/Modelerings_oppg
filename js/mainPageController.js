function taskMatchesDayAndPerson(dayValue,personId,task) {
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
    for (let i=0;i<model.prizes.length;i++) {
        if (model.prizes[i].Name == thisPrize) {
            theIndex = i;
        }
    }
    for (let j=0;j<model.users.length;j++) {
        if (model.users[i].id == thePerson.id && model.users[i].points >= model.prizes[theIndex].points) {
            model.users[i].points = model.users[i].points - model.prizes[theIndex].points;
            //må få lagt inn at premien nå er tatt
        }
    }
    updateView();
}
