let index = -1;
function getCardById(id) {
    index++;
    switch (id) {
        case 0: return new card("Kevin", "Durant", 100, 100, 208, 100, index, "./imgs/KDurant.jpg");
        case 1: return new card("Giannis", "Antetokounmpo", 96, 99, 225, 98, index, "./imgs/GiannisA.jpg"); //D.Bodzioch@zsti.pl
        case 2: return new card("Stephen", "Curry", 90, 98, 188, 96, index, "./imgs/SCurry.png");
        case 3: return new card("Russel", "Westbrook", 90, 98, 191, 94, index, "./imgs/RWestbrook.jpg");
        case 4: return new card("Bradley", "Beal", 90, 98, 191, 92, index, "./imgs/BBeal.jpg");
        case 5: return new card("Klay", "Thompson", 92, 97, 198, 90, index, "./imgs/KThompson.jpg");
        case 6: return new card("Paul", "George", 96, 90, 203, 94, index, "./imgs/PGeorge.jpg");
        case 7: return new card("Nikola", "Jokic", 85, 96, 211, 91, index, "./imgs/NJokic.jpg");
        case 8: return new card("Joel", "Embiid", 98, 89, 213, 95, index, "./imgs/JEmbiid.jpg");
        case 9: return new card("Lebron", "James", 90, 98, 206, 96, index, "./imgs/LJames.jpg");
    }
}