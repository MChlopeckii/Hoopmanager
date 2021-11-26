let selectedCard = -1;
let leftSlot = null;
let middleSlot = null;
let rightSlot = null;
function cardHover(id)
{
    for(let i=0; i<=index; i++)
    {
        if(document.getElementById(i) && i !== id) document.getElementById(i).style.opacity = 0.2;
    }
    document.getElementById(id).lastChild.style.display = "block";
}
function cardLeaveHover(id)
{
    for(let i=0; i<=index; i++)
    {
        if (document.getElementById(i)) document.getElementById(i).style.opacity = 1;
    }
    document.getElementById(id).lastChild.style.display = "none";
}
function cardAdd(id)
{
    selectedCard = id;
    document.getElementById("popUpCardMessage").style.display = "block";
}
function cardRemove(id)
{
    document.getElementById("cards").removeChild(document.getElementById(id))
    for(let i=0; i<=index; i++)
    {
        if (document.getElementById(i)) document.getElementById(i).style.opacity = 1;
    }
}
function chooseSlot(slotId)
{
    const slot = document.getElementById(slotId);
    if(slot.firstChild !== null)    //remove player from slot
    {
        slot.removeChild(slot.firstChild);
        switch(slotId)
        {
            case "leftWing": document.getElementById(leftSlot).style.display = "inline-grid"; break;
            case "centerPosition": document.getElementById(middleSlot).style.display = "inline-grid"; break;
            case "rightWing": document.getElementById(rightSlot).style.display = "inline-grid"; break;
        }
    }
    if(selectedCard !== -1 && slot.firstChild == null)  //add player to slot
    {
        switch(slotId)
        {
            case "leftWing": leftSlot = selectedCard; break;
            case "centerPosition": middleSlot = selectedCard; break;
            case "rightWing": rightSlot = selectedCard; break;
        }
        const img = document.createElement("img");
        img.src = cards[selectedCard].img;
        slot.appendChild(img);
        document.getElementById(selectedCard).style.display = "none";
        selectedCard = -1;
        document.getElementById("popUpCardMessage").style.display = "none";
    }
}
function displaySlotInfo(slotId)
{
    const slot = document.getElementById(slotId);
    if(slot.firstChild !== null)
    {
        //TODO: Okienko z tutorialem
    }
}