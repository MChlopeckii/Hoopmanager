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
    const newCard = document.createElement("div");
    newCard.id = card.id;
    newCard.className = "card";
    newCard.src = "orangeCard.png";

    let documentFragment = document.createDocumentFragment();   // appends the .card div
    documentFragment.appendChild(newCard);

    const cardimg = document.createElement("img");              //appends the card img
    cardimg.src = "orangeCard.png";
    newCard.appendChild(cardimg);

    const cardName = document.createElement("p");               //appends player's name
    cardName.innerHTML = card.name+" "+card.last_name;
    cardName.className = "cardName";
    newCard.appendChild(cardName);

    document.getElementById("cards").appendChild(documentFragment);
    const animatedCard = document.getElementById(card.id).cloneNode(true);
    document.getElementById("openingAnimation").appendChild(animatedCard);
}