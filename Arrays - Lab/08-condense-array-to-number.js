function condenseArray(numbers){

    while (numbers.length > 1){
        let condensed = Array(numbers.length - 1)
        for(let i = 0; i < numbers.length - 1; i++){
            condensed[i] = numbers[i] + numbers[i + 1]
        }
        numbers = condensed;
    }
    
    console.log(numbers[0]);
}

condenseArray([5,0,4,1,2])