# class, this, es6화살표 함수, 메서드 축약형

## class
> class는 es6부터 지원했고
> 인스턴스 생성을 위한 목적으로 탄생

```js
// 일반함수를 생성자 함수로 사용 
function foo(name) {
    this.name = name;
}

console.log()

```

##  class로 인스턴스 생성 문법

```js
// 클래스 이름은 대문자로 시작
[class 예약어] [클래스 이름] {
    // 생성자 함수. 최초에 인스턴스 생성될 때 한번 호출
    constructor() {
        this.name
    }
    foo() {
        console.log("안녕 나는 " + name + "야")
    }
}

class Student {
    constructor (age, name, city) {
        this.age = age;
        this.name = name;
        this.city = city;

    }
    // 생성하는 인스턴스에 포함시킬 메서드
    getInfo () {
        // es6 문법 템플릿 리터럴
        // 문자열과 변수를 같이 사용하는 경우 
        // 코드영역을 문자열 안에 표현할수있다.
        return `나는 : ${this.name}`;

    }
}

const student = new Student(20, "soon", "seoul") 
```



## class의 상속
> class의 상속은 기능단위로 구분해서 만들 때 의존성 주입 
> 하나의 사물의 책임은 본인이 맡고 
> 기능을 책임지는 것 상속받은 객체는 본인만 관리하고
> 기능의 책임은 부모에게 맡기고 자식은 본인의 책임을 진다.

> 객체에 부모의 내용이 상속되어서 인스턴스가 생성되어야 할때 

```js
class Mather {
    getInfo(){
        console.log("부모 클래스의 메서드")
    }
}





    // class 상속 예약어 extends
class Child extends Mather{

}


// Child의 클래스에게 Mather내용을 상속
// 

const child = new Child();
console.dir(Child)


class Child extends Mather {
    constructor(name,age){
        this.name = age;
        this.age = age;
    }
}


```

> 클래스로 동물 클래스를 만들고 좋아하는 동물 3종류를 만드는데 울음소리는 각각의 동물들이 내는 울음소리를 내고 3 종류 중에서 1종류의 동물은 날 수 있다. 달리는 메서드 멈추는 메서드 
상속해서 클래스 4개 만들어서 


### this가 중요한 것

```js
function
```


## 일반함수사용

```js
function foo (a,b) {
    console.log(this)
    return[a,b]
}

const a = foo(1,2);
console.log(a);
```


## 생성자함수사용

```js
function foo (a,b) {
    console.log(this)
    this.arr = [a,b];
}

const a = new foo(1,2);
// new 키워드로 생성한 객체안에서 생성자 함수가 호출되고
// 반환은 생성한 객체의 주소값을 반환해서 a라는 변수에 할당해준것.
// this는 생성ㅎ산 객체를 참조하게 된다. 
```



## 객체 메서드로 할당
```js
function foo(a,b) {
    console.log(this)
    return [a,b]
}

const bar = {
    method : foo
}

bar.method(1,2);

```
함수의 내용은 동일하지만 상황에 따라서 this가 호출되는 위치에 따라 동적으로 참조하는 객체가 바뀐다. 
동적으로 바뀌는 this가 좋을 수도 있는데 이 부분은 어려움이 있다.

- 일반함수
- 생성자함수
- 객체의메서드

역할에서 사용하는 함수들은 각각 this가 binding이 되기 때문에 

`function`키워드는 this binding이 된다.

## this binding 이란?

```js
function a() {

}
console.dir(a);

/*
    f a()
        argument
        caller
        length
        name
        prototype
*/
```

`prototype`이라는 `property`는 생성자 함수와 관련이 있다.
일반함수에는 필요가 없다.

- 일반 함수로 사용한다. => constructor가 필요없다.
- function이라는 키워드는 생성자도 사용하고 일반함수도 사용하고 하다보니
- 일반함수로 사용할 때 this와 생성자 함수의 사용의 this가 바인딩 되서 달라지니 혼란이 올수 있게 만든다.

bind라는 것은? 
```js
function foo(a,b) {
    console.log(this);
    return [a,b]
}

const a = foo(1,2);
console.log(a);

const bar = {
    method : foo
}

bar.bethod(2,3);
```

둘다 같은 foo 일반함수인데 this의 결과가 다르다.

바인딩을 하는 메서드 
this binding을 완화하기위한

- bind
- call
- apply

### bind
```js
function foo(a,b) {
    console.log(this)
    return [a,b]
}

const obj = {name : "soon"}
const fooBind = foo.bind(obj)
const bar = {method : fooBind}
bar.method(1,2);
```
<!-- ---------------------------------------------------------------------------- -->
#### 생성자 함수

### es5

```js
function foo(a,b) {
    console.log(this);
    this.arr = [a,b];
}

foo.prototype.getArr = function() {
    return this.args
}

const _foo = new foo(1,2);
console.log(_foo);
```

### es6
> class
```js
class Foo {
    constructor(a,b) {
        this.arr = [a,b];
    }

    getArr this.arr
}

const bar = new Foo(1,2);
console.dir(bar);
```

문법만 다른 것보다 차이는
기본적으로 함수는 `메서드`의 역할만 확실하게 할 수 있도록 기능이 되어있다. 
예를 들어 foo 객체 안에 getArr 이라는 메서드가 있고 이 메서드는 생성자가 존재한다.
그래서 new 키워드로 결과를 확인하면 결과물로 생성한 인스턴트를 존재한다.
밑에 class 문법으로 만든 Foo는 메서드안에 생성자가 없다. new로 객체를 만들 수 없는 메서드

```js
// 일반 함수
new _foo.getArr();
// 메서드 축약형
new bar.getArr();
```

목적에 맞게 함수는 기능을 작성하기 위해서 생성자 함수는 불필요하니 제거한것.

es6 문법자체가 목적성이 명확해졌다.

### 일반 함수
일반 함수로 선언할때 es6에 나온 화살표 함수를 사용한다.
유튜버 재남 function 아예 쓰지 마세요

화살표 함수는 기능을 작성할 일반함수로 목적에 맞게 사용하고

인스턴스 생성할때는 class 사용하고

객체안에 메서드는 메서드 축약형을 사용하자 



```js
function foo(n) {
    console.log(n)
}

console.dir(foo);
```





```js

// return 축약형. 중괄호 지우면 반환값을 반환한다.
() => 1;
(a,b) => a+b;



const bar = (arg) => {
    console.log(arg);
}

console.dir(bar);
```

위에서 얘기한것처럼 function은 생성자 함수가 포함되어 있는데 arrow function은 생성자 함수가 포함되어 있지 않다.
화살표 함수는 this 바인딩이 되지 않는다. 바로 상위 컨텍스트에 this를 바라본다.










```js
const obj = {
    name : "soon",
    getName() {
        console.log(obj.name)
    }
}

const obj2 = obj;
obj2.getName()

function inner() {
    console.log(3,this);
    function outer() {
        console.log("2",this);
        function hello() {
            console.log(4,this)
        }
        hello()
    }

    outer()
    return function() {
        console.log("1",this);
    }
}

inner();

inner.call({name : "soon2"});
```































// 생성자 == constructor?


