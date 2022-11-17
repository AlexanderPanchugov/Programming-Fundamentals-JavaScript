function stringSubstring(word, text) {
    let wordsFromTxt = text.split(' ');

    for (const wordFromTxt of wordsFromTxt) {
        if (word.toLocaleLowerCase() === wordFromTxt.toLocaleLowerCase()) {
            return console.log(word);
        }
    }

    console.log(`${word} not found!`);
}

stringSubstring('javascript',

    'JavaScript is the best programming language')