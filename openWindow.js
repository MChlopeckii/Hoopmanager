let cardWindowOpen = false;
let lootBoxOpen = false;
function openCardsWindow() {
    let window = document.getElementById("cardsWindow");
    let field = document.getElementById("cards");
    cardWindowOpen = openingHandler(window, field, cardWindowOpen);
}
function openLootWindow() {
    let window = document.getElementById("lootWindow");
    let field = document.getElementById("loot");
    lootBoxOpen = openingHandler(window, field, lootBoxOpen);
}
function openingHandler(field, window, checker) {
    if (checker == false) {
        field.className = "openWindow file";
        window.classList = "openField";
        return true;
    }
    else {
        field.className = "file";
        window.className = "closedField";
        return false;
    }
}