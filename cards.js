class card {
    constructor(name, last_name, speed, accuracy, height, overall, id, img) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.speed = speed;
        this.accuracy = accuracy;
        this.height = height;
        this.overall = overall;
        this.img = img;
    }
}

function createCard() {
    displayCards(
        getCardById(
            Math.floor(
                Math.random() * 10
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
    cardName.innerHTML = card.name+" "+card.last_name+ "<br><br><br>";
    cardName.className = "cardName";
    newCard.appendChild(cardName);

    const cardLeft = document.createElement("p");
    cardLeft.innerHTML = "<br><br><br><br> &nbsp&nbspSzybkość: "+card.speed+"<br> &nbsp&nbspCelność: "+
    card.accuracy+ "<br> &nbsp&nbspWysokość: "+card.height;
    cardLeft.className = "cardLeft";
    newCard.appendChild(cardLeft);

    const cardRight = document.createElement("p");
    cardRight.innerHTML = "<br><br><br><br>Pozycja:&nbsp&nbsp&nbsp&nbsp<br>Dowolna&nbsp&nbsp&nbsp&nbsp";
    cardRight.className = "cardRight";
    newCard.appendChild(cardRight);

    const cardOverall = document.createElement("p");
    cardOverall.innerHTML = "<br><br><br><br><br><br><br>"+card.overall;
    cardOverall.className = "cardOverall";
    newCard.appendChild(cardOverall);

    const cardImgContainer = document.createElement("div");
    const cardImg = document.createElement("img");
    cardImgContainer.className = "cardImgContainer"
    cardImg.className = "cardImg";
    cardImg.src = card.img;
    newCard.appendChild(cardImgContainer);
    cardImgContainer.appendChild(cardImg);
    cardImgContainer.innerHTML += "<br><br><br><br><br><br><br><br><br>";

    document.getElementById("cards").appendChild(documentFragment);
    const animatedCard = document.getElementById(card.id).cloneNode(true);
    animatedCard.id += "clone";
    document.getElementById("openingAnimation").appendChild(animatedCard);
}