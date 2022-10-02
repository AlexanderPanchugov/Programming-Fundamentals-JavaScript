function division(number){

    let outPutNumber = 0;
    
    if (number % 10 === 0) {
        outPutNumber = 10;
    } else if (number % 7 === 0){
        outPutNumber = 7;
    } else if (number % 6 === 0){
        outPutNumber = 6;
    } else if (number % 3 === 0){
        outPutNumber = 3;
    } else if (number % 2 === 0){
        outPutNumber = 2;
    } else {
        console.log('Not divisible');
    }
    if (outPutNumber !== 0)
    console.log(`The number is divisible by ${outPutNumber}`);
}

division(1643)