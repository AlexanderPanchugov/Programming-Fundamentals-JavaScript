function equalSum(numbers){
 
    let foundIndex = 'no';
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++){
        let left = 0;
        let right = 0;

        for(let l = 0; l < i; l++){
            left += numbers[l];
        }
        for(let r = i + 1; r < numbersLength; r++){
            right += numbers[r];
        }
        if(left === right){
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}

equalSum([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])