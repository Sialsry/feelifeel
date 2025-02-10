let boxContent = document.querySelectorAll(".box-content")

console.log(boxContent[0].getBoundingClientRect().top) // getBoundingClientRect 요소의 사각면의 위치 알려줌 (브라우저상에서의 상대위치)

// 상대위치를 절대위치로 계산: 상대위치값 + 스크롤한 값. 스크롤 된 값은 스크롤 된 요소의 dom 객체의 내용에 포함되엉 있다. pageYOffset

const posY = []
for (let i = 0; i < boxContent.length; i++) {
    posY.push(boxContent[i].getBoundingClientRect().top + window.pageYOffset)    
}

window.onscroll = () => {
    console.log(window.scrollY) // 브라우저의 상단 기준으로 얼마나 스크롤했는지
    
    const scroll = window.scrollY + window.innerHeight

    boxContent.forEach((el, index) => {
        if (scroll > posY[index]) {
            el.classList.add("is-active")
        } else {
            el.classList.remove("is-active")
        }
    })








}