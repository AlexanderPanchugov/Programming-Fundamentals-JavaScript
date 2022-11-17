function counterStrike(array) {
    let initialEnergy = array.shift().split(` `).map(x => Number(x));
    let distance = array.shift();
    let wonBattles = 0;
    while (distance != "End of battle") {
        if (initialEnergy - distance >= 0) {
            wonBattles++
            initialEnergy -= distance;
            if (wonBattles != 0 && wonBattles % 3 == 0) {
                initialEnergy += wonBattles;
            }
        }
        else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            return;
        }
        distance = array.shift();
    }
    console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);

}

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
