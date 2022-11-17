function blackFlag(arr) {

    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());

    let gainedPlunder = 0;

    for (let i = 1; i <= days; i++) {
        gainedPlunder += dailyPlunder;

        if (i % 3 === 0) {
            gainedPlunder += dailyPlunder / 2;
        }
        if (i % 5 === 0) {
            gainedPlunder = gainedPlunder * 0.70;
        }
    }
    if (gainedPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${gainedPlunder.toFixed(2)} plunder gained.`);

    } else {
        let percentCollected = (gainedPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentCollected.toFixed(2)}% of the plunder.`);

    }

}

blackFlag(["10", "20", "380"])