function emojiDetector(input) {

    let text = input.shift();

    let tresHold = 1;
    let emojiCounter = 0;
    let coolEmojis = [];

    let digits = text.match(/\d/g);
    for (const digit of digits) {
        tresHold *= Number(digit[0]);

    }


    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/gm);
    for (const emoji of emojiMatches) {
        let emojiName = emoji.groups.name
        emojiCounter++

        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i)
        }
        if (emojiCoolnes >= tresHold) {
            coolEmojis.push(emoji)
        }
    }
    console.log(`Cool threshold: ${tresHold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmojis) {
        console.log(emoji[0]);
    }


}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
