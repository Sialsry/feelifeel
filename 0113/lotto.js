// 1. 로또 추첨 번호들

// 2. 당첨 번호 통

// 3. 겹치는 번호가 없어야해 

const lottoNum = []; // 로또를 추첨할 번호들

const result = []; // 로또의 결과를 담을 배열 

// 추첨된 단계 

for (let i = 1; i <= 45; i++) {
    lottoNum.push(i);
    
    
}

console.log("번호 세팅 끝" + lottoNum.length + "개의 공 번호");

// 6개의 공을 뽑아야 한다.

for (let i = 0; i < 6; i++) {
    let randomNum = parseInt(Math.random()* lottoNum.length);
    console.log(randomNum)
    let number = lottoNum[randomNum];

    // 꺼낸 공은 제외시켜야 함 
    // 해당 인덱스의 값을 지우고 뒤의 값을 모두 하나씩 땡기고 
    // 해당 인덱스와 맨 뒤의 값을 바꾸고 맨 뒤의 값만 제거하고 길이 줄이기
    // 이러한 기능이 이미 구현이 되어있다. 
    // 메서드의 종류를 몽땅 아는것보다 메서드의 역할을 아는게 중요하다.

    // 배열의 원하는 인덱스의 값을 제거한다 원본 배열에서
    // 값의 얕은 복사 깊은 복사 

    lottoNum.splice(randomNum,1) // 배열의 인덱스의 값을 제거 () : 값이 두개가 들어간다. 첫번째: 시작 인덱스, 두번째: 지울 개수
    result.push(number);

}

// while 겹치는 숫자가 안나올때까지

console.log("로또의 추첨 결과는");

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}