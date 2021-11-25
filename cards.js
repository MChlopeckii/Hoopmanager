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

    let documentFragment = document.createDocumentFragment();   // appends the .card div
    documentFragment.appendChild(newCard);

    const cardimg = document.createElement("img");              //appends the card img
    cardimg.src = "orangeCard.png";
    newCard.appendChild(cardimg);

    const cardName = document.createElement("p");               //appends player's name
    cardName.innerHTML = card.name+" "+card.last_name;
    cardName.className = "cardName";
    newCard.appendChild(cardName);

    const cardLeft = document.createElement("p");
    cardLeft.innerHTML = "&nbsp&nbspSzybkość: "+card.speed+"<br> &nbsp&nbspCelność: "+
    card.accuracy+ "<br> &nbsp&nbspWysokość: "+card.height;
    cardLeft.className = "cardLeft";
    newCard.appendChild(cardLeft);

    const cardRight = document.createElement("p");
    cardRight.innerHTML = "Pozycja:&nbsp&nbsp&nbsp&nbsp<br>Dowolna&nbsp&nbsp&nbsp&nbsp";
    cardRight.className = "cardRight";
    newCard.appendChild(cardRight);

    const cardOverall = document.createElement("p");
    cardOverall.innerHTML = +card.overall;
    cardOverall.className = "cardOverall";
    newCard.appendChild(cardOverall);

    const cardImg = document.createElement("img");      //appends card img
    cardImg.className = "cardImg";
    cardImg.src = card.img;
    newCard.appendChild(cardImg);

    const cardMenu = document.createElement("div");     //appends card remove and add buttons
    cardMenu.className = "cardMenu";
    newCard.appendChild(cardMenu);
    const buttonAdd = document.createElement("button")
    const buttonRemove = document.createElement("button")
    buttonAdd.className = "buttonAdd";
    buttonAdd.id = card.id+"AddButton";
    buttonAdd.innerHTML = "Dodaj";
    buttonRemove.className = "buttonRemove";
    buttonRemove.id = card.id+"RemoveButton";
    buttonRemove.innerHTML = "Usuń";

    document.getElementById("cards").appendChild(documentFragment);
    document.getElementById(card.id).lastChild.appendChild(buttonAdd);
    document.getElementById(card.id).lastChild.appendChild(buttonRemove);
    document.getElementById(card.id+"AddButton").addEventListener("click", () => {cardAdd(card.id)})
    document.getElementById(card.id+"RemoveButton").addEventListener("click", () => {cardRemove(card.id)})
    document.getElementById(card.id).addEventListener("mouseover", () => {cardHover(card.id)});
    document.getElementById(card.id).addEventListener("mouseout", () => {cardLeaveHover(card.id)});

    const animatedCard = document.getElementById(card.id).cloneNode(true);
    animatedCard.id += "clone";
    document.getElementById("openingAnimation").appendChild(animatedCard);
}