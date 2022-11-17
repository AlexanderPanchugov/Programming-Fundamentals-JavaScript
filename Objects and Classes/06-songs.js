function songsSuggestion(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;

        }

    }
    let songs = []; //създаваме празен масив, в който ще пазим избраните песни
    let numberOfSongs = input.shift(); // вземаме броя на песните
    let typeSong = input.pop(); //method removes the last element from an array and returns that element. This method changes the length of the array.

    for (let i = 0; i < numberOfSongs; i++) { // итерираме през всяка песен
        let [type, name, time] = input[i].split('_'); // вземаме елементите като премахваме долна черта с split()
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name)); //ако послледния тип песен е all - добавяме, всяка песен в листа на новия масив
    } else {
        let filtered = songs.filter((i) => i.type === typeSong); // филтрираме по по последния параметър типа на песента подаден във входните данни
        filtered.forEach((i) => console.log(i.name)) //принтираме резултата

    }
}

songsSuggestion([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])