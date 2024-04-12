function taskMatchesDayAndPerson(dayValue,personId,task) {
    //her må vi også etter hvert legge inn en sjekk på alder når vi får det på plass
    if (task.done) return false;
    if (!task.responsible.includes(personId)) return false;
    if (task.dueDate == dayValue) return true;
    //Forsikring for at det ikke kræsjer:
    return false;
}

//returnerer id-en til den personen som er logga inn
function findThePerson() {
    for (let person of model.users) {
        if (person.username == model.inputs.login.username) {
            return {id: person.id, age: person.age};
        }
    }
}

function personAgeFitsTask(age,task) {
    if (!task.ageLimit) return true;
    if (age>=task.ageLimit.from && age<=task.ageLimit.to) return true;
    return false;
}
