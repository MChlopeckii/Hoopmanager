let cardWindowOpen = false;
let lootBoxOpen = false;
let playsWindowOpen = false;
let simWindowOpen = false;

function openCardsWindow() {
    const window = document.getElementById("cardsWindow");
    const field = document.getElementById("cards");
    cardWindowOpen = openingHandler(window, field, cardWindowOpen);
}
function openLootWindow() {
    const window = document.getElementById("lootWindow");
    const field = document.getElementById("loot");
    lootBoxOpen = openingHandler(window, field, lootBoxOpen);
}
function openPlaysWindow() {
    const window = document.getElementById("playsWindow");
    const field = document.getElementById("plays");
    playsWindowOpen = openingHandler(window, field, playsWindowOpen);
}
function openSimWindow() {
    const window = document.getElementById("simWindow");
    const field = document.getElementById("sim");
    simWindowOpen = openingHandler(window, field, simWindowOpen);
}
function openingHandler(field, window, checker) {
    if (checker == false) {
        field.className = "openWindow file";
        window.classList = "openField";
        window.style.height = "630px";
        return true;
    }
    else {
        field.className = "file";
        window.className = "closedField";
        setTimeout(() => { window.style.height = "0px" }, 500);
        return false;
    }
}