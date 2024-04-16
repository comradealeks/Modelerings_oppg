function goToNewUser() {
    model.app.currentPage = 'newUser';
    updateView();
}
function SaveNewUser(){
    let error = 0;
    model.inputs.register.errorMessage = null
    if (model.inputs.register.type == null) {
        model.inputs.register.errorMessage = 'Du må velge en type'
        error = 1;
    }
    if (model.inputs.register.password != model.inputs.register.password2){
        model.inputs.register.errorMessage = 'Passordet stemmer ikke'
        error = 1;
    }
    if (hasWhiteSpace(model.inputs.register.password) || hasWhiteSpace(model.inputs.register.username)) {
        model.inputs.register.errorMessage = 'Brukernavn og passord kan ikke inneholde mellomrom'
        error = 1;
    }
    if (!testEmail(model.inputs.register.email)) {
        model.inputs.register.errorMessage = 'Denne eposten adressen er ikke gyldig'
        error = 1;
    }
    for (let user of model.users) {
        if (user.username == model.inputs.register.username) {
            model.inputs.register.errorMessage = "Dette brukernavnet er allerede i bruk"
            error = 1;
        }
    }
    if (!model.inputs.register.age) {
        model.inputs.register.errorMessage = 'Du må fylle ut feltet med alder'
        error = 1;
    }
    if (error == 0){
        //mangler å legge inn id under her:
        userList = model.users
        userList.push({
            type: model.inputs.register.type,
            name: model.inputs.register.name,
            password: model.inputs.register.password,
            username: model.inputs.register.username,
            email: model.inputs.register.email,  
            color: "#000000" //tror dette burde fungere
        });
        
        model.app.currentPage = 'userLogin';
        model.inputs.register.type = null;
        model.inputs.register.name = null;
        model.inputs.register.password = null;
        model.inputs.register.password2 = null;
        model.inputs.register.username = null;
        model.inputs.register.email = null;
        updateView();
    } else {
        updateView();
    }
    
}
function hasWhiteSpace(s) {
    // Check for white space
    var reWhiteSpace = new RegExp("/^\s+$/");
    if (reWhiteSpace.test(s)) {
        return true;
    }
    return false;}

// {
//     id: 1789,
//     type: 'adult',
//     name: 'Kalle Klovn',
//     password: 'abc123',
//     username: 'theClown',
//     email: 'karl.morten.lunna@gmail.com',
// }



function testEmail(txt) {
    let charachters = txt.split('')
    let snabelkr = []
    for (let i=0;i<charachters.length;i++) {
        if (charachters[i]=='@') {
            snabelkr.push(i)
        }
    }
    if (snabelkr.length==1) {
        let after = []
        
        for (let k=snabelkr[0]+1;k<charachters.length;k++) {
            if (charachters[k]=='.') after.push(k)
        }
        if (after.length == 1) {  //er dette riktig??
            return true
        }
        else return false
    }
    else return false
}
