let index = -1;
let cards = [];
function getCardByIdFromSzti(id) {
    switch (id) {
        case 0: return cards[index] = new card("Kevin", "Durant", 100, 100, 208, 100, index, "./imgs/KDurant.jpg", true);
        case 1: return cards[index] = new card("Giannis", "Antetokounmpo", 96, 99, 225, 98, index, "./imgs/GiannisA.jpg", true); //D.Bodzioch@zsti.pl
        case 2: return cards[index] = new card("Stephen", "Curry", 90, 98, 188, 96, index, "./imgs/SCurry.png", false);
        case 3: return cards[index] = new card("Russel", "Westbrook", 90, 98, 191, 94, index, "./imgs/RWestbrook.jpg", false);
        case 4: return cards[index] = new card("Bradley", "Beal", 90, 98, 191, 92, index, "./imgs/BBeal.jpg", false);
        case 5: return cards[index] = new card("Klay", "Thompson", 92, 97, 198, 90, index, "./imgs/KThompson.jpg", false);
        case 6: return cards[index] = new card("Paul", "George", 96, 90, 203, 94, index, "./imgs/PGeorge.jpg", false);
        case 7: return cards[index] = new card("Nikola", "Jokic", 85, 96, 211, 91, index, "./imgs/NJokic.jpg", false);
        case 8: return cards[index] = new card("Joel", "Embiid", 98, 89, 213, 95, index, "./imgs/JEmbiid.jpg", false);
        case 9: return cards[index] = new card("Lebron", "James", 90, 98, 206, 96, index, "./imgs/LJames.jpg", true);
    }
}
function getCardByIdFromDavid(id) {
    switch (id) {
        case 0: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 1: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 2: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 3: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 4: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 5: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 6: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 7: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 8: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
        case 9: return cards[index] = new card("Przemek", "Szymański", 1000, 1000, 230, 1000, index, "./imgs/Przemek.jpg", true);
    }
}