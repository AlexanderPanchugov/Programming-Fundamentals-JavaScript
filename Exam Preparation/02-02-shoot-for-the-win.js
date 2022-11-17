function shootForTheWin(input){
    let targets = input.shift().split(' ').map(Number);

    let shotedTargets = 0;
    let command = input.shift()

    while(command !== 'End'){
        let index = Number(command);

        if(index >= 0 && index < targets.length){
            for(let i = 0; i < targets.length; i++){
                let currentTarget = targets[index];

                if(i !== index && targets[i] !== -1){
                    if(targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
            targets[index] = -1;
            shotedTargets++
        }
        command = input.shift();
    }
    console.log(`Shot targets: ${shotedTargets} -> ${targets.join(' ')}`)
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])