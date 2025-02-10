# DOM을 사용해서 CRUD

댓글 구현

## count

```js

```


## 이벤트 handler 함수 작성
> 이벤트 제어 함수를 만들어서 재사용성 높이기

```js
const handler = (e) => {
    display.innerHTML = e.target.id === "increment" ? ++num : num > 0 ? --num : num;
    // 삼항 연산자 
}

incrementBtn.onclick = handler;
decrementBtn.onclick = handler;

```

## CRUD
> 댓글 구현
1. 댓글 입력 할 수 있다. (Create)
    - 댓글을 입력창에 입력하고 작성을 누르면 리스트에 댓글이 추가된다. 
    - 댓글을 성공적으로 추가하면 입력폼의 입력내용을 리셋시켜준다.
2. 댓글을 리스트로 조회해서 출력해준다. (Read)
    - 댓글의 내용은 '아이디', '댓글 내용', '날짜'로 표현
    - 댓글 리스트는 최신순으로 표현
    - 댓글의 총 개수를 표현
    - 수정 / 삭제 버튼 존재한다.

3. 댓글을 수정할 수 있다. (Update)
    - 댓글의 리스트에서 내용을 클릭하면 input요소가 생기고
    - input에 값을 입력받고
    - 엔터를 누르면 input의 내용을 수정되게 
4. 댓글을 삭제할 수 있다. (Delete)
    - 해당 리스트의 삭제버튼을 클릭하면 안내를 한번 하고 삭제.
    - 확인을 누르면 삭제
    - 취소를 누르면 삭제 x


### Create 단계
객체를 사용해서 사물을 표현 
> 댓글 하나의 내용이 객체로 표현될 수 있다. 

```js
const obj = {
    uid: "soon",
    comment: "내용",
    date: "2025-01-21"
}
// 배열을 사용해서 관리하면 수월하다.
const contentList = [
    {
        uid: "soon",
    comment: "내용",
    date: "2025-01-21"
    }, 
    {
        uid: "soon",
    comment: "내용",
    date: "2025-01-21"
    }, 
    {
        uid: "soon",
    comment: "내용",
    date: "2025-01-21"
    }, 
    {
        uid: "soon",
    comment: "내용",
    date: "2025-01-21"
    }, 
]





for(let i = 0; i < contentList.length; i++) {
    contentList[i].uid === "soon"

    const str = `${contentList[i].uid}가 ${contentList[i].comment}를 ${contentList[i].date}에 작성했음`
}

// Date 객체
// 자바스크립트에 내장되어 있는 생성자
// 날짜 시간 데이터를 다룰 때 제공하는 메서드가 포함되어 있는 객체 

new Date(); // 컴퓨터 시간으로 객체안의 내용을 만든다. 

console.log(new Date(1000));
// 컴퓨팅 시스템에서 시간을 추적하는 시스템 유닉스 시간의 시점에서 부터
// 1000 밀리세컨드 시간이 증가한 값
// 메서드에 get 값을 가져오겠다 조회하겠다.
// set의 키워드는 값을 수정하겠다. 

console.log(new Date().getFullYear())
console.log(new Date().getMonth() + 1) 1월0
console.log(new Date().getDate())
console.log(new Date().getDay()) 일0토6


```






```js
const list = [{uid:"soon", comment: "내용", date: "2025"
}] 



const ul = document.createElement('ul') // ul요소를 만들어서 반환
// 요소의 주소를 할당. 아직 화면에 보이는 상태 아님 

const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

ul.append(li, li2, li3)
li.classList.add("comment-uid")
li2.classList.add("comment-content")
li3.classList.add("comment-date")






// 객체 구조분해 할당
const {uid, comment, date} = List[i];

li.innerHTML = uid;
li2.innerHTML = comment;
li3.innerHTML = Date;





document.body.append(ul); // 화면에 보임

```

### 실습
3시부터 페어 코딩
CR 구현 

말하는 사람 
코드치는 사람