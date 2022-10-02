function equalArrays(array1, array2) {

    let sumOfArray = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sumOfArray += Number(array1[i]);
    }
    console.log(`Arrays are identical. Sum: ${sumOfArray}`);
}

equalArrays(['1', '2', '3', '4', '5'],

    ['1', '2', '4', '4', '5'])