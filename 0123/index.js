let playerBtn = document.querySelectorAll(".player-btn");
let playerSelect = document.querySelector(".player-select")
const Arr = ["scissors", "rock", "paper"]


const init = () => { // 게임 초기화 
    playerBtn.forEach((item, index) => {
        item.onclick = () => {
            playerSelect.className = `player-select ${Arr[index]}`
            const {value, text} = gameStart(Arr[index]);
            document.querySelector(".result").innerHTML = value;
            document.querySelector(".content-value").innerHTML = text;
        }
    }) 
}
const gameStart = (player) => {
    let comSelect = Arr[Math.floor(Math.random() * Arr.length)];
    document.querySelector(".com-select").className = "com-select " + comSelect;
    if (player === comSelect) {
        return {value : "무승부", text : "무승부"}
    } else if (player === "rock" && comSelect === "scissors" ||
               player === "paper" && comSelect === "rock" ||
               player === "scissors" && comSelect === "paper") {
        return {value : "승리", text : "승리"}
    } else {
        return {value : "패배", text : "패배"}
    }
}

init()