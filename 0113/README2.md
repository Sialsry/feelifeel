# 함수
> 중복되는 코드의 재사용성을 높이기 위해서
> 코드의 내용의 실행을 목적에 맞게 호출하기 위해서
> 자바스크립트는 코드를 실행했을 때 커다란 묶음으로 실행을 하는데
> 전역공간에 작성한 내용을 모두 위에서 밑으로 실행한다.
> 코드의 가독성과 재사용성이 용이하다.

### 함수 선언
```js
// 선언
[function 예약어] [함수 이름] (매개변수) {
    코드의 내용
}

// 실행 호출
[함수 이름] (매개변수);


// 우리
function message(value) {
    console.log(value)
}
message("1");
// 함수 안에 내가 작성한 매개변수의 이름과 갯수만큼 초기화되고 할당된다. 

function message(value, value2) {
    console.log(value + value2)
}

message("1","2");

```


## 함수의 매개변수와 스코프
```js
let a = "함수"

function name(a){
    console.log(a);
}

// a라는 매개변수가 있고 전역에 a라는 변수가 있으면
// 식별자의 우선순위 정적인 스코프안에서 자바스크립트 엔진은 식별자를 판단하는데
// 해당 스코프내의 변수를 먼저 가져온다.
// 똑같은 변수명이 있어서 상위 스코프의 변수를 가져오지 못하는 현상을  `변수섀도잉`


function name2(){
    console.log(a);
}



```
### 함수의 매개변수와 반환값
```js
// return: 값을 반환하고 종료
// ㅇ
function name(myValue) {
    return "안녕" // 종료
}

[함수이름](); // 함수의 실행
[함수이름] // 함수의 이름 
console.log(name())




function boo() {
    const b = 3;
    function boo2() {
        boo3()
        console.log(b);
        function boo3() {
            console.log(a);
        }
        const a = 2;
    }
    const a = 1;
    boo2();
}
boo();
_________________________________________________________


function poo () {
    const num2 = 2;
    function poo2 (num2) {
        console.log(num2)
    }
    const num3 = 5;
    function poo3(num3) {
        poo2(num3);
        console.log(num3);
    }
    const num4 = 6;
    function poo4 (num4) {
        poo3(num2);
    }
    poo4(6);
}

poo();


```





### 블로그 정리 





