function lastKNumberSequence(length, k) {

    let sequence = [1];

    for (let i = 1; i < length; i++) {

        let index = Math.max(sequence.length - k, 0)
        let lastSumOfEl = sequence.slice(index)

        let sum = 0;
        for (const el of lastSumOfEl) {
            sum += el;
        }
        sequence.push(sum)

    }
    console.log(sequence.join(' '));
}

lastKNumberSequence(6, 3);