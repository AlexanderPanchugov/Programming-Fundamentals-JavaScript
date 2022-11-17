function revealWord(words, text) {
    let wordsArray = words.split(', ');
    text = ` ${text} `;
    wordsArray.forEach(word => {
        let match = ` ${'*'.repeat(word.length)} `;
        text = text.replace(match, ` ${word} `)
    });
    console.log(text.trim());
}

revealWord('great',

    'softuni is ***** place for learning new programming languages')