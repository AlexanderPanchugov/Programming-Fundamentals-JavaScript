function intFloat(firstN, secondN, thirdN){
    let sum = firstN + secondN + thirdN;
    

    sum % 1 === 0? sum += ' - Integer' :sum += ' - Float';

    console.log(sum)
}

intFloat(9, 100, 1.1)