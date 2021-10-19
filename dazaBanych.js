let index = -1;
function getCardById(id) {
    index++;
    console.log(id)
    switch (id) {
        case 0: return new card("Paweł", "Wolny", 100, 100, 230, 100, index)
        case 1: return new card("Sebastian", "Gozdzinsky", 50, 50, 150, 50, index); //D.Bodzioch@zsti.pl
        case 2: return new card("Mateusz", "Mańka", 90, 70, 187, 90, index)
    }
}