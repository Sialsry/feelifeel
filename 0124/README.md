# 이벤트속성 scroll swiper


```js
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
```


## swiper 

> 과제 스와이프 직접 구현하고 
> 이전에 우리가 만든 html 페이지에서 swipe의 위치는 페이지의 중단 또는 하단 
> 스크롤해서 밑으로 페이지를 내리면 스와이프가 보이게 
> 스와이프에는 현재 인덱스를 표현하는 불릿이 있다.
> 스와이프에이미지













