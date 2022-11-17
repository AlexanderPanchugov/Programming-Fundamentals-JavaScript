function oddOcurrences(input) {

    let result = {};
    let words = input
        .split(' ')
        .map(w => w.toLowerCase())

    for (let word of words) {
        if (result[word] == undefined) {
            result[word] = 1;
        } else {
            result[word]++
        }
    }
    let finalResult = '';

    for (const word of words) {
        if (result[word] % 2 === 1) {
            finalResult += `${word} `;
            delete result[word];
        }
    }
    console.log(finalResult);
}

oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');