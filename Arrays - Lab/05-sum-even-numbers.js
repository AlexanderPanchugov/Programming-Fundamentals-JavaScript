function sumOfevenNumbers(arr){

    let evenSum = 0;

    for (let textNumber of arr){
        let number = Number(textNumber);
        if (number % 2 == 0){
            evenSum += number
        }
    }
    console.log(evenSum);
}

sumOfevenNumbers(['1','2','3','4','5','6'])