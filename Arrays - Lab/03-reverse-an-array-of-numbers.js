function revArrayNums(count, numbers){
    let revArrayNums = [];

    for(let i = 0; i < count; i++){
        revArrayNums[i] = numbers[count - 1 - i];
    }


    let result = ' ';
    for(let i = 0; i < revArrayNums.length; i++){
        result += revArrayNums[i];

        if(i < revArrayNums.length - 1){
            result += ' ';
        }

    }
    console.log(result);
}

revArrayNums(3, [10, 20, 30, 40, 50])