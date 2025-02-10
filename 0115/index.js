class Student {
    constructor(_age, _city, _name = "name") {
        this.name = _name;
        this.age = _age;
        this.city = _city;
    }



    // 메서드 축약형 
    getInfo() {
        console.log(this);
        return  `내 이름은 ${this.name}`
    }
}






const student = new Student(20, `대전`);

console.log(student);

// 함수와 메서드 차이. 메서드는 객체에 포함된 함수

// 상위 객체를 바인딩해서 
student.getInfo();


// 전역에 this를 찍으면 window
console.log(this);

let getInfo = student.getInfo; 
getInfo(); // 찾지 못한다. 주소를 참조해서 할당을 한 경우



// 익명함수 이름이 없는 함수
// 사용할 때 한번 정의해서 호출하거나 변수에 할당해서 사용할 때
// 쿨백 함수들을 사용할때 익명함수는 한번 정의하고 재사용 안할 내용이라던지를 작성해서 사용할때
// 아니면 단순하게 함수의 값 형태를 사용할때
let getInfo2 = function() { // TDZ
    console.log(this);
}

let getInfo3 = getInfo2;


getInfo2();
getInfo3();




class Character {
    constructor(_hp, _mp, _atk) {
        this.hp = _hp;
        this.mp = _mp;
        this.atk = _atk;
    }
    
    getState () {
        return `캐릭터의 HP: ${this.hp} MP: ${this.mp} ATK: ${this.atk}`
    }



    // 정적 메서드
    // 클래스에서 사용할 정적 메서드 
    // 일반적으로 클래스의 공용 
    // 객체에 포함되지 않고 
    static getATK(n) {
        return n.atk;
    }






}



let character = new Character(100,100,10);
console.log(character); // 문자열 같은 출력값 확인: log
console.dir(character); // 객체의 형태를 출력해서 확인할때는 dir이 더 명확하게 표현해줌 


// 정적 메서드 호출
Character.getATK(character);

// 프로토 타입(생성자 관련)
// 자바스크립트의 객체는 모두 원형을 가지고 있다
// 원형의 객체를 모든 객체가 상속받는다. 

let num = `안녕`;





