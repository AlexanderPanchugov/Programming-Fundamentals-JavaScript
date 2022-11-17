function sumFirstAndLast(numbers) {
    let firstNum = Number(numbers[0]);
    let lastNum = Number(numbers.pop());


    let output = firstNum + lastNum;

    console.log(output);
}

sumFirstAndLast(['20', '30', '40'])