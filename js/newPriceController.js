function saveNewPrize() {
    let errors = 0;
    model.inputs.addPrize.errorMessage = null;
    if (model.inputs.addPrize.Name == null) {
        errors = 1;
        model.inputs.addPrize.errorMessage = 'Du må legge til et navn for premien'
    }
    if (model.inputs.addPrize.points == null) {
        errors = 1;
        model.inputs.addPrize.errorMessage = 'Du må legge til antall poeng for premien'
    }
    if (errors == 0) {
        if (model.inputs.addPrize.ageLimit.from == null) {
            model.inputs.addPrize.ageLimit.from = 0;
        }
        if (model.inputs.addPrize.ageLimit.to == null) {
            model.inputs.addPrize.ageLimit.to = 120;
        }
        if (model.inputs.addPrize.deadline) {
            model.inputs.addPrize.deadline = model.weekdays.indexOf(model.inputs.addPrize.deadline);
        }
        model.prizes.push({
            Name: model.inputs.addPrize.Name,
            ageLimit: {from: model.inputs.addPrize.ageLimit.from, to: model.inputs.addPrize.ageLimit.to},
            points: model.inputs.addPrize.points,
            deadline: model.inputs.addPrize.deadline,
        })
        model.inputs.addPrize.Name = null;
        model.inputs.addPrize.ageLimit = {from: null, to: null};
        model.inputs.addPrize.points = null;
        model.inputs.addPrize.deadline = null;

        model.app.currentPage = 'mainPage';
        updateView();
    }
    else {
        model.app.currentPage = 'newPrice';
        updateView();
    }
}
