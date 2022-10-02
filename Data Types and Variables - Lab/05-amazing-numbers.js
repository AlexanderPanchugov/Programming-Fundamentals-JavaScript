function amazingNums(number){
    let textNumber = number.toString();
    let sum = 0;

    for(let i = 0; i < textNumber.length; i++){
        let currentNumber = Number(textNumber[i]);
        sum += currentNumber;
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${number} Amazing? True`: `${number} Amazing? False`);


}

amazingNums(999)