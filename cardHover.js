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
    console.log(id)
}
function cardRemove(id)
{
    document.getElementById("cards").removeChild(document.getElementById(id))
    for(let i=0; i<=index; i++)
    {
        if (document.getElementById(i)) document.getElementById(i).style.opacity = 1;
    }
}