function logout() {
    model.inputs.username = null;
    model.inputs.password = null;
    model.inputs.errorMessage = null;
    model.app.currentPage = 'userLogin';
    updateView();
}

function backToMain(){
    model.app.currentPage = 'mainPage';
    updateView();
}