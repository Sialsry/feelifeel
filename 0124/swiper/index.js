// 클릭의 위치 정보가 필요하다. 클릭한 위치의 좌표
// 클릭한 위치의 좌표를 눌렀을때 뗐을떄 

// 마우스의 클릭 시작 위치

let start;

// 진행중인 swiper 인덱스

let index = 0;

let swiper = document.querySelector(".swiper")
let swiperContent = document.querySelector(".swiper-content")
let {length} = document.querySelectorAll(".swiper-item")
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

swiper.onmousedown = (e) => { //클릭하면 발생하는 이벤트
    start = e.clientX
    console.log("나 클릭시작: x축" + start)
}

swiper.onmouseup = (e) => {
    console.log("나 클릭종료: x축" + e.clientX)
    if (e.clientX < start) { // 오른쪽으로 스와이프
        if (index < length-1)
        index++
        swiperMove()
    } else {
        if(index > 0)
        index--
        swiperMove()
    }
    console.log(index)
}

const swiperMove = () => {
    let swiperWidth = parseInt(getComputedStyle(swiper).width)
    swiperContent.style.left = `${-(index * swiperWidth)}px`
}

prevBtn.onclick = () => {
    if(index > 0)
        index--
        swiperMove()
}

nextBtn.onclick = () => {
    if (index < length-1)
        index++
        swiperMove()
}