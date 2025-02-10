

// 입력받은 값을 저장해서 사용하기 위해서
// prompt 우리가 입력한 값을 시스템 입력창 모달이 뜨고 입력한 값을 변수에 할당을 하면 저장할 수 있다.
// prompt 반환값은 string 타입이다.

// let myName = prompt("너 이름을 입력할래?")
// console.log(myName)

// 시스템 팝업으로 log를 확인하는 방법




// let age = prompt("나이 입력")
// if ((age > 20) && (age < 50)) {
//     alert(age + "살이야")
//     alert(age > 20)
//     alert(age < 50)
// } else {
//     alert("미성년이거나 나이가 너무 많습니다")
// }



// let st = prompt("숫자를 입력하세요")
// let num = parseInt(st)
// if (typeof(st)===string) {
//     alert("숫자만 입력하세요")
// } else {
//     alert(num)
// }


// let str = prompt()
// let score = parseInt(str)


// if (isNaN(score)) {
//     alert("숫자만 입력하세요")
// } else if (score >= 90) {
//     alert("A")
// } else if (score >= 80) {
//     alert("B")
// } else if (score >= 70) {
//     alert("C")
// } else {
//     alert("D")
// } 


// if(true != "true") {
//     console.log("a")
// }

//--------------------------------------------------------------------스코프




// if (true) {
//     let a = 0;
// }
// console.log(a)


// if (true) {
    
//     let a = 0;
// }

// let a = 0;



//
switch ("RUN") {
    case "RUN":
        break;

    case "STATE":
        break;
}