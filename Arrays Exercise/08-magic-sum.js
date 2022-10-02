function magicSum(numbers, sum){
    let length = numbers.length;

    for (let i = 0; i < length; i++){
        for (let j = i + 1; j < length; j++){
            if (numbers[i] + numbers[j] === sum){
                console.log(`${numbers[i]} ${numbers[j]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],8)