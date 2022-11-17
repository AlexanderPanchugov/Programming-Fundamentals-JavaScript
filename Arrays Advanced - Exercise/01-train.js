function train(arr) {

    let passengersInTrain = arr.shift().split(' ').map(Number);
    let maxPassengerInTrain = Number(arr.shift())

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currentRow = arr[i].split(' ');

        if (currentRow[0] === 'Add') {

            let newWagonPassengers = Number(currentRow[1]);
            passengersInTrain.push(newWagonPassengers);
        } else {
            for (let j = 0; j < passengersInTrain.length; j++) {

                let pasengersInCurrentWagon = passengersInTrain[j]
                if (pasengersInCurrentWagon + Number(currentRow[0]) <= maxPassengerInTrain) {
                    passengersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInTrain.join(' '));
}

train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])