# DOM의 사용 목적과 문법

BOM : 브라우저의 기능을 사용하기 위한 목적을 가진 객체 
DOM : html문서의 요소들을 동적으로 조작할때 사용하는 객체

## DOM 객체의 요소 선택
```js
const element = document.getElementById('') // 요소의 아이디명으로 선택해서 요소를 할당.
// id 요소는 html 문서상 고유한 이름, 변수로 사용할 수 있다.
```

### queryselector

```js
const element = document.querySelector('.box') // 아이디, 클래스 즉 css 선택자 로 요소를 호출할 수 있다.
const element2 = document.querySelectorAll('.box') // 같은 클래스를 가진 요소가 여러개일 경우, 배열의 형태도 제공을 해준다.
    // box클래스를 가지고 있는 요소 유사 배열 node list
```


### 요소의 속성값
```js
element.style.color = "blue"; // 인라인 스타일로 추가
element.style.backgroundColor = "blue"; // 하이픈 부분 대문자
```

### 요소의 내용
```js
element.innerText // 글자의 내용을 작성할때
element.innerHTML // HTML 요소의 내용 또는 글자를 작성할 때 

// input, img 같은 특수한 요소들은 키로 값을 접근할 수 있다. 

console.log(content.value); // 함수를 호출할 시기는 버튼을 누르는 행위
// 콜백함수는 기능을 잠시 대기 시켰다가 내가 원할 때 호출


```


```html
<input class="content"/>
```

### 요소의 이벤트 속성

```js
const element = document.queruSelector(".content-btn")
// click 이벤트. onclick이라는 속성으로 정의되어있다. 
element.onclick = () => {
    console.log("이 내용은 요소를 클릭할 때 호출된다.")
}
```


```html
<button class = "content-btn">버튼<button>
```


## 이벤트를 활용해서 드래그앤 드롭


### 실습 과제
카운터
버튼 누르면 숫자가 증감하는 카운터
플러스 버튼, 마이너스 버튼

최소값 0