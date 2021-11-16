class card {
    constructor(name, last_name, speed, accuracy, height, overall, id) {
        this.name = name;
        this.last_name = last_name;
        this.speed = speed;
        this.accuracy = accuracy;
        this.height = height;
        this.overall = overall;
        this.id = id;
    }
}

function createCard() {
    displayCards(
        getCardById(
            Math.floor(
                Math.random() * 3
            )
        )
    );
}
function displayCards(card) {
    let newCard = document.createElement("div");
    newCard.id = card.id;
    newCard.className = "card";
    document.getElementById("cards").appendChild(newCard);
    document.getElementById(card.id).innerHTML = card.name + " " + card.last_name + "<br>" + "prędkość:" +
        card.speed + "<br>" + "celność:" + card.accuracy + "<br>" + "wysokość:" + card.height;
    document.getElementById("openingAnimation").appendChild(newCard);
}