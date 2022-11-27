function pirates(input) {

    let cities = {};
    let array = [];

    while (input[0] !== 'Sail') {

        let command = input.shift().split('||');

        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);

        let result = array.find((x) => x.city === city);
        let index = array.indexOf(result);

        if (result) {
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = { city, population, gold };
            array.push(cities)
        }
    }
    while (input[0] !== 'End') {
        let commands = input.shift().split('=>');
        let currentCommand = commands.shift();

        switch (currentCommand) {
            case 'Plunder':
                let town = commands[0];
                let people = Number(commands[1]);
                let gold = Number(commands[2]);

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let result = array.find((x) => x.city === town);
                let index = array.indexOf(result);

                array[index].population -= people;
                array[index].gold -= gold;

                if (array[index].population <= 0 || array[index].gold <= 0) {
                    array.splice(index, 1);
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                let townName = commands[0];
                let goldAmount = Number(commands[1]);

                if (goldAmount < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    let result = array.find((x) => x.city === townName);
                    let index = array.indexOf(result);

                    array[index].gold += goldAmount;
                    console.log(`${goldAmount} gold added to the city treasury. ${townName} now has ${array[index].gold} gold.`);
                }

                break;
        }
    }
    if (array.length !== 0) {
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        array.forEach((t) => console.log(`${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`))
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])