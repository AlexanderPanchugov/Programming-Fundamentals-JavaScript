function maxNumber(input){

    let resultArray = [];

    for(let i = 0; i < input.length; i++){
        let isBigger = true;
        let currentNumber = input[i];
        for(let j = i + 1; j < input.length; j++){
            if (currentNumber <= input[j]){
                isBigger = false;
            }
        }
        if (isBigger){
            resultArray.push(input[i]);
        }
    }
    console.log(resultArray.join(' '));
}

maxNumber([1, 4, 3, 2])