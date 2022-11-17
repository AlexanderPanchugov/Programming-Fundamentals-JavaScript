function searchForANumber(numbers, actions) {

    let numbersTotake = actions[0];
    let numbersToRemove = actions[1];
    let searchedNumber = actions[2];

    let takenNumbers = numbers.slice(0, numbersTotake);

    takenNumbers.splice(0, numbersToRemove);

    let counter = 0;

    for (const number of takenNumbers) {
        if (number === searchedNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])