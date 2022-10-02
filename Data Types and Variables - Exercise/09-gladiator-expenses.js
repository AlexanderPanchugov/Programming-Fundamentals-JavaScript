function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){


    let expenses = 0;
    let brokenShields = 0;

    for(let currentFight = 1; currentFight <= lostFights; currentFight++) {
    
     if (currentFight % 2 === 0){
        expenses += helmetPrice; 
     }
     if (currentFight % 3 === 0){
        expenses += swordPrice;
     }
     if (currentFight % 2 === 0 && currentFight % 3 === 0) {
        expenses += shieldPrice;
        brokenShields++
        if (brokenShields % 2 === 0){
            expenses += armorPrice;

         }
     }
    }
     console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    
}

gladiator(23,

    12.50,
    
    21.50,
    
    40,
    
    200)