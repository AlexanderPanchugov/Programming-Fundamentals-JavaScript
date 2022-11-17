function firstAndLastKNums(arr) {

    let k = arr.shift();

    let firstNums = arr.slice(0, k);
    let lastNums = arr.slice(arr.length - k);

    console.log(firstNums.join(' '))
    console.log(lastNums.join(' '))

}

firstAndLastKNums([2, 7, 8, 9]);
firstAndLastKNums([3, 6, 7, 8, 9]);