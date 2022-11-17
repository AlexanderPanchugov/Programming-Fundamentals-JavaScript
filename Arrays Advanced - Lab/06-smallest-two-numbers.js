function smallestOfTwoNumbers(numbers) {

    let sortedNumbers = numbers.sort((a, b) => a - b)

    console.log((sortedNumbers.slice(0, 2)).join(' '));
}

smallestOfTwoNumbers([30, 15, 50, 5])