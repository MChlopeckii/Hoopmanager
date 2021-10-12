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

createCard()
displayCards()
function createCard() {
    const seba = new card("Sebastian", "Gozdzinsky", 50, 50, 50, 50);
    console.log(seba)
}
function displayCards() {


}