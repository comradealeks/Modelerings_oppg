function validatePassword()
{
    /* TODO: stub */
    return 0;
}

function saveSettings()
{
    return 0;
}

function showTextField(field) {
    //bruker querySelectoren til å finne ut hvilken knapp som har blitt trykket basert på parameteret... i etterkant trenkte jeg ikke bruke querySelectoren... eller create element... men lettere...
    let button = document.querySelector('button[onclick="showTextField(\'' + field + '\')"]');
    button.style.display = 'none';

    let container = document.createElement('div');
    //dette er hvor den lager passord tekstboksene
    if (field === 'password') {
        let oldPasswordField = document.createElement('input');
        oldPasswordField.type = 'password';
        oldPasswordField.placeholder = 'Enter old password';

        let newPasswordField = document.createElement('input');
        newPasswordField.type = 'password';
        newPasswordField.placeholder = 'Enter new password';

        let confirmNewPasswordField = document.createElement('input');
        confirmNewPasswordField.type = 'password';
        confirmNewPasswordField.placeholder = 'Confirm new password';

        //denne delen lager en lagrings knapp som fjernes når du har trykket på den
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', function() {
            saveButton.style.display = 'none';
            container.remove()
            button.style.display = 'initial';
        });
        //setter alt sammen
        container.appendChild(oldPasswordField);
        container.appendChild(newPasswordField);
        container.appendChild(confirmNewPasswordField);
        container.appendChild(saveButton);
    // her lages de andre textboksene
    } else {
        let textField = document.createElement('input');
        textField.type = field === 'email' ? 'email' : 'text';
        textField.placeholder = 'Enter new ' + field;

        //her lages lagringsknappen som også sletter textboksene og knappen senere
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', function() {
            saveButton.style.display = 'none';
            container.remove()
            button.style.display = 'initial';
        });

        //settes sammen her
        container.appendChild(textField);
        container.appendChild(saveButton);
    }
    
    button.parentNode.insertBefore(container, button);
}