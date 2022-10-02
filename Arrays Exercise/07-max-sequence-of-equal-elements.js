function maxSequnce(array) {

    let longestSequence = []
    let leftMostIndex = 0;

    for (let i = 0; i < array.length; i++) {
        currentNumber = Number(array[i]);
        let currentSequence = [currentNumber];

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = Number(array[j]);

            if (nextNumber === currentNumber) {
                currentSequence.push(nextNumber);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }




    console.log(longestSequence.join(' '));
}

maxSequnce([0, 1, 1, 5, 2, 2, 6, 3, 3])