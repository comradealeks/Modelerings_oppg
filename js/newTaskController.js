function saveNewTask() {
    let errors = 0;
    model.inputs.addTask.errorMessage = null;
    if (model.inputs.addTask.name == null) {
        errors = 1;
        model.inputs.addTask.errorMessage = 'You have to enter a name for the task'
    }
    if (model.inputs.addTask.cost == null) {
        errors = 1;
        model.inputs.addTask.errorMessage = 'You have to give points for the task'
    }
    if (model.inputs.addTask.type.length == 0) {
        errors = 1;
        model.inputs.addTask.errorMessage = 'Please choose how often the task should be done'
    }
    
    if (errors == 0) {
        
        if (model.inputs.addTask.ageLimit.from == null) {
            model.inputs.addTask.ageLimit.from = 0;
        }
        if (model.inputs.addTask.ageLimit.to == null) {
            model.inputs.addTask.ageLimit.to = 120;
        }
        //dersom oppgaven ikke har tidsfrist så skal den ikke komme opp i kalenderen??:
        // if (model.inputs.addTask.dueDate == null) {
        //     model.inputs.addTask.dueDate = 0;
        // }
        if (model.inputs.addTask.dueDate) {
            model.inputs.addTask.dueDate = model.weekdays.indexOf(model.inputs.addTask.dueDate);
        }
        if (model.inputs.addTask.responsible.length == 0) {
            for (let user of model.users) {
                model.inputs.addTask.responsible.push(user.id);
            }
        }
        let newRespTable = makeTableOfIntegers(model.inputs.addTask.responsible);

        model.tasks.push({
            Name: model.inputs.addTask.name,
            type: model.inputs.addTask.type,
            ageLimit: {from: model.inputs.addTask.ageLimit.from, to: model.inputs.addTask.ageLimit.to},
            dueDate: model.inputs.addTask.dueDate,
            cost: model.inputs.addTask.cost,
            responsible: newRespTable,
            done: false,
        })
        model.inputs.addTask.name = null;
        model.inputs.addTask.type = [];
        model.inputs.addTask.ageLimit = {from: null, to: null};
        model.inputs.addTask.dueDate = null;
        model.inputs.addTask.cost = null;
        model.inputs.addTask.responsible = [];

        model.app.currentPage = 'mainPage';
        updateView();
    }
    else {
        model.app.currentPage = 'newTask';
        updateView();
    }
}

function makeTableOfIntegers(table) {
    let newTable = [];
    for (let i=0;i<table.length;i++) {
        newTable.push(parseInt(table[i]));
    }
    return newTable;
}
