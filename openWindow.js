let cardWindowOpen = false;
function openCardsWindow() {
    if (cardWindowOpen == false) {
        document.getElementById("cards").style.height = 630 + "px";
        document.getElementById("cardsWindow").style.height = 700 + "px";
        cardWindowOpen = true;
    }
    else {
        document.getElementById("cards").style.height = 0 + "px";
        document.getElementById("cardsWindow").style.height = 70 + "px";
        cardWindowOpen = false;
    }
}