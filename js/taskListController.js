function findTypeFromUsername(thisUser) 
{
    for (let us of model.users) 
    {
        if (us.username == thisUser) return us.type;
    }
}

function deleteTask(theTaskName) 
{
    let index = findTaskIndexFromName(theTaskName);
    model.tasks.splice(index,1);
    updateView();
}

function findTaskIndexFromName(theName) 
{
    let theIndex = -1;
    for (let i=0;i<model.tasks.length;i++) 
    {
        if (model.tasks[i].Name == theName) 
        {
            theIndex = i;
        }
    }
    return theIndex;
}