function rightPlace(string, char, word){
    let res = string.replace('_',char);
    let output = res === word? "Matched": "Not Matched";

    console.log(output);

}

rightPlace('Str_ng', 'i',

'String')