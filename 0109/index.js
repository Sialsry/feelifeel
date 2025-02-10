// let num1;
// let num2;
// num1 = 5;
// num2 = 6;
// console.log(num1 !== num2);


let num1 = 100;

if (num1 > 100) {
    console.log("내가 출력되니?")
}


let str = "나는 이상암 학생이야";

if (str === "나는 이준헌 학생이야") {
    console.log("내가 보이니?")
} else if (str === "나는 이수호 학생이야") {
    console.log("내가 보이지!")
} else {
    console.log("충족되는 조건이 없어")
}



let myName1 = "김민교"
let myName2 = "이수호"
let myName3 = "이준헌"
let myName4 = "구다경"
let myName5 = "나한별"
let myName6 = "이상암"
let myName7 = "김지은"
let myName8 = "binod"
let myName9 = "김홍규"

let myValue = "김민교"

// 나는 김민교 학생입니다.
if (myValue === myName1) {
    console.log("나는 " + myValue + " 학생입니다.")
} else if (myValue === myName2) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName3) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName4) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName5) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName6) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName7) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName8) {
    console.log("나는" + myValue + "학생입니다.")
}
  else if (myValue === myName9) {
    console.log("나는" + myValue + "학생입니다.")
}









// 1부터 10까지 숫자를 출력해줘
for (let i = 0; i < 10; i++) {
    console.log(i);
}



// 3단에서 4의 곱 출력 하지 않기 
for (let i = 1; i < 10; i++) {
    if (i != 4) {
        console.log("3 X " + i + " = " + 3 * i );
    
    }
} 


















for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
    console.log(i + " * " + j + " = " + i*j);
}
}