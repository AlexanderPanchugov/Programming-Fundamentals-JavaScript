function catData(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of input) {
        
        //let[name, age] = line.split(' ') - алтернатива на долните 3 реда
        
        let data = line.split(' ');
        let name = data[0];
        let age = Number(data[1]);

        let cat = new Cat(name, age)
        

        cat.meow()
    }


}

catData(['Mellow 2', 'Tom 5'])