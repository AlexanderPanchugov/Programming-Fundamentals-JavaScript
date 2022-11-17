function replacingChars(input) {
    let letters = input.split('');

    let result = input[0];
    for (let i = 1; i < input.length; i++) {
        const current = input[i];
        const prev = input[i - 1];

        if (input[i] !== input[i - 1]) {
            result += current
        }
    }
    console.log(result);
}

replacingChars('aaaaabbbbbcdddeeeedssaa')