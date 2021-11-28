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
            case "leftWing": document.getElementById(leftSlot).style.display = "inline-grid"; 
            document.getElementById("leftPopUp").style.opacity = 0; break;
            case "centerPosition": document.getElementById(middleSlot).style.display = "inline-grid";
            document.getElementById("middlePopUp").style.opacity = 0; break;
            case "rightWing": document.getElementById(rightSlot).style.display = "inline-grid";
            document.getElementById("rightPopUp").style.opacity = 0; break;
        }
    }
    if(selectedCard !== -1 && slot.firstChild == null)  //add player to slot
    {
        let cardSlot = null;
        let activeSlot = null;
        switch(slotId)
        {
            case "leftWing": activeSlot = document.getElementById("leftPopUp");
            cardSlot = leftSlot = selectedCard; break;
            case "centerPosition": activeSlot = document.getElementById("middlePopUp");
            cardSlot = middleSlot = selectedCard; break;
            case "rightWing": activeSlot = document.getElementById("rightPopUp");
            cardSlot = rightSlot = selectedCard; break;
        }
        const img = document.createElement("img");
        img.src = cards[selectedCard].img;
        slot.appendChild(img);
        document.getElementById(selectedCard).style.display = "none";
        selectedCard = -1;
        document.getElementById("popUpCardMessage").style.display = "none";
        
        activeSlot.innerHTML = cards[cardSlot].name+" "+cards[cardSlot].last_name+"<br>"+cards[cardSlot].overall+"<br>"+"Kliknij aby usunąć";
        activeSlot.style.background = (cards[cardSlot].rareCard)? "#77CCBE" : "#ffa251";
    }
}
function displaySlotInfo(slotId)
{
    const slot = document.getElementById(slotId);
    if(slot.firstChild !== null)
    {
        switch(slotId)
        {
            case "leftWing": document.getElementById("leftPopUp").style.opacity = 1; break;
            case "centerPosition": document.getElementById("middlePopUp").style.opacity = 1; break;
            case "rightWing": document.getElementById("rightPopUp").style.opacity = 1; break;
        }

    }
}
function hideSlotInfo(slotId)
{
    const slot = document.getElementById(slotId);
    if(slot.firstChild !== null)
    {
        let activeSlot = null;
        switch(slotId)
        {
            case "leftWing": activeSlot = document.getElementById("leftPopUp"); break;
            case "centerPosition": activeSlot = document.getElementById("middlePopUp"); break;
            case "rightWing": activeSlot = document.getElementById("rightPopUp"); break;
        }
        activeSlot.style.opacity = 0;
    }
}