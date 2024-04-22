function deletePrice(thePriceName) 
{
    let index = findPriceIndexFromName(thePriceName);
    model.prizes.splice(index,1);
    updateView();
}

function findPriceIndexFromName(theName)
{
    let theIndex = -1;
    for (let i=0;i<model.prizes.length;i++)
    {
        if (model.prizes[i].Name == theName) 
        {
            theIndex = i;
        }
    }
    return theIndex;
}

function findUsernameByPersonId(theID) 
{
    for (let user of model.users)
    {
        if (user.id == theID) return user.username
    }
}