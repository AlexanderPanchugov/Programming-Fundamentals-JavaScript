function convert(firstName, lastName, hairColor) {

    let personInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let infoJson = (JSON.stringify(personInfo))
    console.log(infoJson)

}

convert('Peter', 'Smith',

    'Blond')