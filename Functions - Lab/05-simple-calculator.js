function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;

    switch (operator) {
        case 'multiply':
            result = numOne * numTwo;
            break;
        case 'divide':
            result = numOne / numTwo;
            break;
        case 'add':
            result = numOne + numTwo;
            break;
        case 'subtract':
            result = numOne - numTwo;
    }
    console.log(result);
}

simpleCalculator(50,

    13,

    'subtract')