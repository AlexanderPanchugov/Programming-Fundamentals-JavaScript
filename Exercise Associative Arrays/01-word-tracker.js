function wordTracker(input) {

    const words = input.shift().split(' ');
    let output = {};

    for (const word of words) {
        output[word] = 0;

    }
    for (const word of input) {
        if (output.hasOwnProperty(word)) {
            output[word]++;
        }
    }
    const sorted = Object.entries(output).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }



}

wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])