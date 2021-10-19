class card {
    constructor(name, last_name, speed, accuracy, height, overall) {
        this.name = name;
        this.last_name = last_name;
        this.speed = speed;
        this.accuracy = accuracy;
        this.height = height;
        this.overall = overall;
    }
}

function createCard() {
    const seba = new card("Sebastian", "Gozdzinsky", 50, 50, 50, 50);
    displayCards(seba);
}
function displayCards(card) {
    let newCard = document.createElement("div");
    newCard.id = card.name;
    newCard.className = "card";
    document.getElementById("cards").appendChild(newCard);
}