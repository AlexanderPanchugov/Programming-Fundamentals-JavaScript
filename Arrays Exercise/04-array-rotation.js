function arrayRotation(input, rotations){

    for(let i = 0; i < rotations; i++){
        let numToMove = input.shift();
        input.push(numToMove);
    }
    console.log(input.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)