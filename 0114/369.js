// 첫번째로 숫자 입력받고 두번째로 연산자 입력받고 마지막으로 숫자 입력 받기

// 사용자 입력값을 받는 prompt 메서드 사용 

// 첫번째숫자 변수명 : num1, 연산자변수명: calcs, 마지막숫자변수명: num2

// switch 구문 사용 해서 사칙연산 계산하기 

// 결과값 담는 변수명 : result


let num = parseInt(prompt("입력한 숫자까지 369게임 시작"))


if (num <= 20) {
    for (let i = 1; i <= num; i++) {
        
        if ((i%10) === 0 || (i%10)%3 !== 0) {
            console.log(i)    
        } else if ((i%10)%3 === 0) {
            console.log("Clap!")
        } 
    }

} else {
    for (let i = 1; i <= 20; i++) {

        if ((i%10) === 0 || (i%10)%3 !== 0) {
            console.log(i)
        } else if ((i%10)%3 === 0) {
            console.log("Clap!")
        }
    }
}