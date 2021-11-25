function cardHover(id)
{
    for(let i=0; i<=index; i++)
    {
        if(i !== id) document.getElementById(i).style.opacity = 0.2;
    }
    //document.getElementById(id).lastChild.style.display = "block";
}
function cardLeaveHover()
{
    for(let i=0; i<=index; i++)
    {
        document.getElementById(i).style.opacity = 1;
    }
}