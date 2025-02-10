class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name}은${this.speed}로 달리고 있다. (부모의 함수임)`)
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name}이 멈췄다. (부모의 함수임)`)
    
    }
}

class Cat extends Animal {
    constructor(name) {
    super(name);

    }

    speak() {
        console.log("야옹");
    }
}

const cat = new Cat("때껄룩");

cat.run(40);
cat.stop();
cat.speak();
console.log(cat);