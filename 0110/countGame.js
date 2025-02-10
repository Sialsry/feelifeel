// 1. 플레이어의 선택을 담을 변수
// 2. 컴퓨터의 선택을 담을 변수 
// 3. 플레이어가 선택을 했으면 사용할 제어문 () ()
// 4. 게임의 종료 시점 : 결과 같을 때, 시도 횟수가 끝났을 때



// 랜덤한 값을 구하는 메서드 : Math.random()
// random: 0 ~ 1 에서 랜덤한 값을 구해준다.

// let a = parseInt
// alert(Math.random())


let comSelect = parseInt(Math.random()*99 +1);

let playerSelect;

let count = 0; // 시도횟수 

let max = 99; // 플레이어가 선택할 수 있는 최대 숫자


let min = 0; // 플레이어가 선택할 수 있는 최소 숫자

let text = ""; // 안내문구로 사용할 텍스트

let gameCount = parseInt(prompt("몇번 안에 맞추시겠습니까?"));


//게임을 한번만 할게아니고 코드를 여러번 호출해야하니 반복문을 통해서 게임의 로직을 작성
 while ((playerSelect !== comSelect) && (count < gameCount)) {
     playerSelect = prompt("숫자를 입력해 주세요        최소: " + min + " , 최대: " + max + "           게임의 남은 횟수: " + (gameCount-count))
     playerSelect = parseInt(playerSelect)
     if (isNaN(playerSelect)) {
         text = "숫자만 입력하세요. "
         continue; // 아래 코드를 실행하지 않고 반복문의 시작 영역부터 다시 동작한다.
     }

     if ((min >= playerSelect) || (max <= playerSelect)) {
        text = (min + 1) + " ~ " + (max - 1) + "의 범위에서 입력해 주세요"
        continue;
     }


     count++;

     if (playerSelect > comSelect) {
        max = playerSelect;
        text = "다운"
     } else if (playerSelect < comSelect) {
        min = playerSelect;
        text = "업"
     } else {
        alert(count + "회를 시도하여 정답을 맞추셨습니다.");
        break;
     }






 }

