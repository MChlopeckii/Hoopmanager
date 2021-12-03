if(localStorage.getItem("index")) index = localStorage.getItem("index");
for(let i=0; localStorage.getItem("card"+i); i++)
{
    const card = JSON.parse(localStorage.getItem("card"+i));
    if(localStorage.getItem("card"+i) !== "deleted") displayCards(card);
    cards[i] = card;
}
function saveProgress(card)
{
    localStorage.setItem("card"+index, JSON.stringify(card));
    localStorage.setItem("index", index);
}
function clearLocal()
{
    for(let i=0; localStorage.getItem("card"+i); i++)
    {
        if(localStorage.getItem("card"+i) !== "deleted") localStorage.clear("card"+i);
    }
    localStorage.clear("index");
    location.reload();
}