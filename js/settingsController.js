/* C oversettelse :-) */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} length
 * @returns {number} returns 0 if s1 and s2 match
*/
function timingSafeMemcmp(s1, s2, length)
{
    let ret = -1;
    const c1 = s1.toString();
    const c2 = s2.toString();

    for(let i = 0; i < length; i++)
    {
        ret |= (c1.charCodeAt(i) ^ c2.charCodeAt(i));
    }
    return ret;
}

/**
 * @param {string} originalPassword
 * @param {string} newPassword1
 * @param {string} newPassword2
 */
function validatePassword(originalPassword, newPassword1, newPassword2)
{
    let loggedInPassword = model.inputs.login.password;

    if(timingSafeMemcmp(loggedInPassword, originalPassword, loggedInPassword.length) != 0)
    {
        /* TODO?: returnere en feilmelding kanskje? view funksjon? */
        /* passord mismatch */
        return 1;
    }
    if(newPassword1 != newPassword2)
    {
        /* TODO?: returnere en feilmelding kanskje? view funksjon? */
        return 2;
    }
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

        let lineBreak1 = document.createElement('br');
        let lineBreak2 = document.createElement('br');
        let lineBreak3 = document.createElement('br');

        //setter alt sammen
        container.appendChild(oldPasswordField);
        container.appendChild(lineBreak1);
        container.appendChild(newPasswordField);
        container.appendChild(lineBreak2);
        container.appendChild(confirmNewPasswordField);
        container.appendChild(lineBreak3);
        container.appendChild(saveButton);
    // her lages de andre textboksene
    } else {
        let textField = document.createElement('input');
        textField.type = field === 'email' ? 'email' : 'text';
        textField.placeholder = 'Enter new ' + field;

        //her lages lagringsknappen som også sletter textboksene og knappen senere
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList = "settingsNextLine"
        saveButton.addEventListener('click', function() {
            saveButton.style.display = 'none';
            container.remove()
            button.style.display = 'initial';
        });

        let lineBreak = document.createElement('br');
        

        //settes sammen her
        container.appendChild(textField);
        container.appendChild(lineBreak);
        container.appendChild(saveButton);
    }
    
    button.parentNode.insertBefore(container, button);
}

function currentColor() {
    for (let person of model.users) {
        if (person.username == model.inputs.login.username) {
            return person.color;
        }
    }
}

function colorChange(value) {
    for (let person of model.users) {
        if (person.username == model.inputs.login.username) {
            person.color = value
        }
    }
}
function ColorScheme() {
    document.body.classList.toggle('dark-mode');
    if (model.app.colorMode === 'dark') {
        model.app.colorMode = 'light';
     } else if (model.app.colorMode === 'light') {
        model.app.colorMode = 'dark';
     }
    model.app.currentPage = "settings"
    updateView()
}