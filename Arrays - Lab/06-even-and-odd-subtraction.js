function evenAndOddSubstraction(array) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    for (let num of array) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}

evenAndOddSubstraction([2, 4, 6, 8, 10])