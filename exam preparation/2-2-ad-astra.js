function adAstra(input) {

    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let exec = pattern.exec(input);
    let totalCalories = 0;
    let itemStore = [];

    while (exec) {
        let name = exec.groups['name'];
        let date = exec.groups['date'];
        let calories = exec.groups['calories'];

        totalCalories += Number(calories);
        let currentItemData = `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`
        itemStore.push(currentItemData)
        exec = pattern.exec(input)
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    itemStore.forEach(item => console.log(item));

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])