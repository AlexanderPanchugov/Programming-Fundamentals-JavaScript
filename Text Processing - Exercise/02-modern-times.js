function modernTimes(string) {
    const words = string.split(' ');

    words.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;
        if (isValidWord) {
            let isLeter = true;
            let wordCopy = '';
            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLeter = false;
                    break;
                } else {
                    wordCopy += word[index]
                }

            }
            if (isLeter) {
                console.log(wordCopy);
            }
        }

    });

}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')