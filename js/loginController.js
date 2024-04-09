function login() {
    for (user in model.users) {
        if (user.username == model.inputs.login.username && user.password == model.inputs.login.password) {
            model.app.currentPage = 'mainPage';
            updateView();
        }
    }
    model.inputs.login.errorMessage = 'Feil brukernavn eller passord. Prøv igjen.';
    updateView();
}