function printChar(input) {
    let word = input.split('');

    for (let i = 0; i < input.length; i++) {
        console.log(word[i]);
    }
}

printChar('AWord')