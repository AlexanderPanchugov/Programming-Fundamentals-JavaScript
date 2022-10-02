function sumOfDigits(number) {

    let numberAsString = number.toString();
    let sum = 0;
    let numberOfDigits = numberAsString.length

    for (let index = 0; index < numberOfDigits; index++) {

        let currentDigit = Number(numberAsString[index]);
        sum += currentDigit;

    }
    console.log(sum);
}

sumOfDigits(245678)