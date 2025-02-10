# DOM, BOM

> javascript로 html을 동적으로 조작하는 기능을 `브라우저`에서 구현한 모델 

- DOM : document object model
- BOM : browser object model

```html
<div>
</div>
```

## 요소 선택
```js
window.console.log("123");

// DOM === html문서 전체의 내용
// document는 문서 전체의 내용을 가지고 있고 그 안의 태그 요소들을 선택해서 제어할 수 있다. 
// dom 트리의 구조에서 자식요소를 선택할수 있다.
// body의 내용은 document의 객체 안에 포함되어있는데 body의 내용만 가지고 올 수 있다. 
// class나 id를 사용해서 body의 안의 원하는 요소를 가져올 수 있다. 

document.getElementById("header"); //아이디가 header인 요소를 선택할 수 있다.

// 자바스크립트에서 id 값은 변수처럼 사용할 수 있다.

console.log(document.body);
    document.body
    const _header = document.getElementById("header");
    console.log(_header)
    console.log(header) // 요소를 선택할 수 있다. id의 값으로, class는 안됨

    // querySelector (css 선택자 내용을 작성해서 요소를 선택할 수 있다.)
    // 맨위부터 찾다가 찾으면 종료
    const box = document.querySelector(".box")
    console.log(box);
    const boxArr = document.querySelectorAll(".box"); 
    console.log(boxArr);
    // node list 형태. 배열과 유사 그래서 유사 배열이라 부른다. 
```





## 요소 생성
> 자바스크립트에서 동적으로 html에 dom요소를 생성하기위해서 creatElement메서드를 활용해서 요소를 생성할 수 있다.
> 요소의 내용을 태그의 형태로 전달을 해주면 브라우저가 읽어서 해석하는 과정에서 요소로 만들어 준다. 
```js
let el = document.creatElement("div")
// node div 요소
// 변수에만 할당이 되고 브라우저에 바로 나타나지는 않는다.
// 원하는 요소의 자식으로 추가해서 위치 영역을 알려준다.
box.append(el)
// append: 요소의 자식으로 추가. node list에 포함이 되고 이때부터 요소가 브라우저에 보이게 된다.

// 요소의 내용을 추가해서 자식으로 생성
el.innerHtml = "본문 내용"

// 문자 text만 작성하겠다. ??
el.innerTEXT = "요소 제외하고 문자만 작성하겠다."

// 노드 객체
el.classList += "box2"
// classList 클래스의 문자열을 제공한다. "box box2 box3"

```

> 똑같이 게시글 직접 만들어보기 디자인도 스타일도 게시판처럼 

### CreatReadUpdateDelete

1. 댓글을 입력할 수 있다. (Create)
 - 댓글의 입력폼에 입력하고 버튼을 누르면 글이 입력돼서 저장
 - 입력창은 초기화 되어야 한다.

 2. 댓글의 리스트로 조회해서 출력 (Read)
 - 댓글의 리스트를 정보를 조회해서 리스트의 형태로 요소를 생성
 - 총 댓글 개수나 수정 삭제 버튼도 생성
 - 댓글 아이디 날짜 내용
 - 리스트를 정렬 하는 방식 최신순 과거순 조회수순

 3. 댓글을 수정할 수 있다. (Update)
 - 수정할 댓글을 클릭하면 수정에 필요한 내용을 입력하는 입력폼이 생기고
 - 값을 입력하고 확인 버튼을 눌러서 정보를 수정 

 4. 댓글을 삭제 (Delete)
 - 해당 리스트의 삭제버튼을 누르면 글을 삭제


create를 작업하면 Read와 연관이 깊다.
데이터가 정상적으로 저장되는지 확인을 하면서 데이터가 정상적으로 추가되는지
UD 마지막으로 수정과 삭제를 하면서 Read로 확인 

> 평가
스택과 큐
실행컨텍스트 내용을 글로 적어서 제출