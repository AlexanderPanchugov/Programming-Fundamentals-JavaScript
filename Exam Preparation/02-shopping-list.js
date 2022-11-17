function writeShoppingList(input) {

    let rawList = input.shift();
    let commands = input.slice();
    let shoppingList = rawList.split('!');
    let currentLine = commands.shift();

    while (currentLine != "Go Shopping!") {
        let lineArgs = currentLine.split(' ');
        let command = lineArgs[0];
        let firstArgument = lineArgs[1];
        let secondArgument = lineArgs[2];

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(firstArgument)) {
                    shoppingList.unshift(firstArgument);
                }
                break;

            case 'Unnecessary':
                let itemIndex = shoppingList.indexOf(firstArgument);

                if (itemIndex > -1) {
                    shoppingList.splice(itemIndex, 1);
                }
                break;

            case 'Correct':
                let updatedIndex = shoppingList.indexOf(firstArgument);
                if (updatedIndex > -1) {
                    shoppingList[updatedIndex] = secondArgument;
                }
                break;

            case 'Rearrange':
                let removeIndex = shoppingList.indexOf(firstArgument);

                if (removeIndex > -1) {
                    let element = shoppingList[removeIndex]
                    shoppingList.splice(removeIndex, 1);
                    shoppingList.push(element);
                }
                break;
        }

        currentLine = commands.shift();
    }
    console.log(shoppingList.join(', '));
}

writeShoppingList(["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",

    "Urgent Tomatoes",

    "Go Shopping!"])