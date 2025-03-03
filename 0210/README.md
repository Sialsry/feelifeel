# 쿼리 스트링, 쿠키, 페이지네이션

## 쿼리 스트링
> 웹을 사용하면서 검색어 관련된 값을 다루기 위해서 url에 추가적인 데이터를 전달하는 방식중에 하나.

### 형태
https://test.com?name=soon
> ? 구문 뒤에 key=value
> 추가적인 데이터를 key와 value로 전달할 수 있다. 

> 이전에는 1990년도에는 정적인 문서를 제공하는 방식이 일반적이었지만 이후에 동적으로 데이터를 요청하고 유저가 입력값을 입력하면 처리하는 방식을 도입 자바스크립트로 처리 

> 민감한 데이터는 사용하면 안된다. 사용자의 입력값에 따라 검색을 할때 유용하다.

## 쿼리스트링의 특징
> 브라우저에 데이터를 전달하기 쉽고 민감한 데이터 비밀번호는 url에 포함하면 안된다 . 
> 검색에 유용하게 사용된다. 

### 문법
1. ?로 시작하는 문자열 
2. key=value 데이터를 저장하는 형태
3. & 여러개의 데이터를 구분 

> https://test.com?name=soon&city=do&age=20

```js
window.location === 쿼리스트링 문자열이 포함되어있다. 
window.location.search
```

## 페이지네이션 
> 글의 갯수가 많고 해당 갯수만큼만 글을 보여주고 나머지글은 다음 페이지에서 보여줘야 할 경우
> 페이지의 번호를 생성하고 보여줄 페이지의 갯수를 정해서 유저에게 글의 갯수만큼만 보여주게 하는것
> 백엔드에서도 처리가 가능하고 프론트에서도 처리가 가능하다. 

### 페이지네이션 기법 
> 한페이지가될수있게 
> 한 페이지에 5개씩 보여야한다. 

## 공식
> 시작 인덱스 = (현재 페이지 넘버 - 1) * 페이지 당 보여줄갯수
예: 1번 페이지 넘버의 화면을 보고있고 글의 갯수는 5
(1-1)*5 === 0번 글부터 시작된다. 첫번째 페이지 
- 끝 인덱스 = 시작 인덱스 + 페이지의 아이템 개수 

- 전체 페이지의 갯수를 계산 
  총 페이지 = (전체 글 개수 + 보여줄 글의 갯수 -1) / 보여줄 페이지의 글 개수 


## 슬라이딩 페이지네이션 
- 1 2 3 4 5 >
- < 6 7 8 9 10 >
- < 11 12 13 14 15 >



> 현재 그룹은 (보고있는 그룹 -1) / 그룹의 크기 = 현재 그룹



- 시작 그룹의 인덱스 = 현재 그룹 * 그룹의 크기 + 1
> (8 - 1) / 5 === 1번 그룹
> 1번 그룹의 첫 스타트 지점 === (1 * 5 + 1 === 6)

- 끝 그룹의 인덱스 = 시작 페이지 + 그룹의 크기 - 1
> 6 + 5 - 1 === 10

### 이전버튼 혹은 다음버튼
> 다음 그룹으로 인덱스 변경 === (현재 그룹 + 1) * 그룹의 크기 + 1
> (0 + 1) * 5 + 1 === 6번 인덱스가 시작점 

> 이전 그룹으로 인덱스 변경 === (현재 그룹 - 1) * 그룹의 크기 + 1
> (1 - 1) * 5 + 1 === 1번 인덱스가 시작점 


## 쿠키 
> 브라우저에서 서버간의 요청을 처리할때 전달할 수 있는 데이터 
> 쿠키는 웹에서 사용자가 브라우저에 저장하는 작은 데이터 사용자 인증에 사용할 데이터 
> 문자열에서 원하는 위치를 항상 가져오기에는 비효율적이기 때문에 객체 혹은 배열로 형변환해서 사용한다. 
> ?index=1
## 쿠키란?
> 문자열로 이루어진 키와 값 
> 유효 기간이 있는 데이터 브라우저에서 체크한 시점에서 사라진다.
> 요청과 응답간에 안전한 데이터를 다룰수있다. 자바스크립트에서 컨트롤을 못하게한다. (민감한 데이터는 당연히 저장하면 안된다.)
> 쿠키를 만들게된 목적은 사용자의 인증을 유지시키기 위한 데이터 
> 내가만든쿠키

## 쿠키의 문법
```js
// 쿠키의 데이터 형태
// key=value;
// expires=만료 시간;
// path=유효한 경로;
// domain=도메인 경로;
// secure; https간에만 사용할 수 있게
// httpOnly; 안전하게 자바스크립트에서 제어할 수 없고 요청 응답 간에만 전달할 수 있다. 
// sameSite; 동일한 도메인의 페이지끼리 사용할 수 있게 할건지? 에 대한 속성
// 쿠키 값 추가 
consts date = new date()
window.document.cookie = `name = soon; expires=${date.getTime() + 1 * 24 * 60 * 60 * 1000}; path=/;`
```