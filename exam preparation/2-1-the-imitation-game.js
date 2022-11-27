function theImitationGame(arrInput) {

    let input = arrInput.slice();
    let encriptedMessage = input.shift();
    let currentMessage = '';
    let line = input.shift()

    while (line !== 'Decode') {
        let elements = line.split('|')
        let command = elements[0];
        switch (command) {
            case 'Move':
                let firstEl = elements[1];
                let letersToMove = encriptedMessage.substring(0, firstEl)

                currentMessage = encriptedMessage.replace(letersToMove, '')
                currentMessage += letersToMove;
                encriptedMessage = currentMessage;
                break;
            case 'Insert':
                let index = Number(elements[1]);
                let value = elements[2];
                
                currentMessage = encriptedMessage.split('');
                currentMessage.splice(index, 0, value);
                encriptedMessage = currentMessage.join('');
                break;
            case 'ChangeAll':
                let substring = elements[1];
                let newChar = elements[2];

                while (encriptedMessage.includes(substring)) {
                    currentMessage = encriptedMessage.replace(substring, newChar);
                    encriptedMessage = currentMessage
                }
                break;
        }

        line = input.shift()
    }

    console.log(`The decrypted message is: ${encriptedMessage}`);

}

theImitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])