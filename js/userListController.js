function deleteUser(theUsername) 
{
    let index = findUserIndexFromUsername(theUsername);
    model.users.splice(index,1);
    if (model.inputs.login.username == theUsername)
    {
        model.app.currentPage = 'userLogin';
    }
    updateView();
}

function findUserIndexFromUsername(theUsername) 
{
    let theIndex = -1;
    for (let i=0;i<model.users.length;i++)
    {
        if (model.users[i].username == theUsername)
        {
            theIndex = i;
        }
    }
    return theIndex;
}