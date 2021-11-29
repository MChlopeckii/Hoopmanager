if(localStorage.getItem("index")) index = localStorage.getItem("index");
for(let i=0; localStorage.getItem("card"+i); i++)
{
    if(localStorage.getItem("card"+i) !== "deleted") displayCards(JSON.parse(localStorage.getItem("card"+i)));
}
function saveProgress(card)
{
    localStorage.setItem("card"+index, JSON.stringify(card));
    localStorage.setItem("index", index);
}