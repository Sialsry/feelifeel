# 자바스크립트의 동기 비동기, 자바스크립트의 스레드

## 동기 (블로킹)
1. 작성한 코드의 순서대로 실행
2. 작업이 끝나야 다음 작업을 실행한다.


## 비동기 (논 블로킹)
1. 작성한 코드가 순서를 기다리지 않고 실행한다.
2. 특정 시간 이후에 코드를 실행시켜야 하는 경우(타이머, 네트워크상에서 데이터의 요청과 응답을 처리하는 시간)

```js

```

### 자바스크립트의 실행 방식 이벤트 루프
> 자바스크립트는 싱글 스레드 
> 이벤트 루프의 실행방식을 가지고 비동기 로직의 처리를 가능하게 한다. 


### 매크로 태스크, 마이크로 태스크
> setTimeout : 매크로 태스크
> promise : 마이크로 태스크

> 태스크 큐에서 처리될때 우선순위가 마이크로 태스크가 더 높다.
> 마이크로 태스크를 모두 처리한 이후에 매크로 태스크를 처리한다. 

```js
const login = (cb) => {
    console.log("로딩중")
    setTimeout(() = > {
        cb()
    }, 1000)
}

console.log("마이페이지 렌더링")
  
login(() => {
    console.log("로그인 성공")
})
console.log("마이페이지 유저 탭 렌더링")
```


### Promise 객체
> 비동기 작업을 처리할 수 있는 내용을 포함하고 있는 객체
> 데이터 요청, 파일 읽기 등 
> 데이터를 받고 데이터의 응답 처리가 끝나면 함수를 호출해서 완료 상태로 만든다.
> 상태머신 상태를 관리하는 오브젝트 즉 객체 
> 대기, 성공, 실패의 상태를 가질 수 있다. 
> 콜백지옥을 방지할 수 있다. 

### promise 객체 상태
1. pending : 대기 상태 promise객체를 생성하면 초기 상태다. 
2. Fullfilled : 비동기 작업이 정상적으로 완료 되었을 때. 성공 상태
3. Rejected : 비동기 작업이 정상적이지 않아서 실패의 상태 

```js
// promise 생성자에 전달하는 콜백함수의 매개변수
// 첫번째 매개변수는 성공일 때 호출할 콜백함수를 호출할때 전달하는 매개변수의 값이 성공의 결과 값이다. 
// 두번째 매개변수는 실패일 때 호출할 콜백함수 . 6시 
const a = 1
let res = new Promise((res, rej) => {
    if(a === 1) {
        res("성공했을 때 반환되는 데이터")
    } else {
        rej("실패했을 때 반환되는 데이터")
    }
})

// 대기상태가 끝나고 성공의 결과가 호출되었을 때 
res.then((result) => {
    //result === "성공했을 때 반환되는 데이터"
}).catch((error) => {

})


res.then()


class Promise {
    state = "pendding"
    Fullfilled = function (resValue) { this.state = "Fullfilled", this.resValue = resValue}
    Rejected = function (rejValue) { this.state = "Rejected", this.rejValue = rejValue}

    constructor(cb) {
        this.cb = cb
        init()
    }

    init() {
        // try catch 백엔드 로직 오류가 발생해도 프로그램이 종료되지 않는다. try catch 밖에 try catch 또 있고 첫번째 try catch문에서 두번째 try catch문의 return한 오류의 내용을 
        try() {
        this.cb(this.Fullfilled, this.Rejected)
        } catch(error) {
        console.log(error)
    }

    then(callback) {
        if(this.state === "Fullfilled") {
            callback(this.resValue)
            return this
        }
        if(callback === undefined) {
            return this
        }
        return this
    }

    catch(callback) {
        if(this.state === "Rejected") {
            callback(this.rejValue)
        }
        if(callback === undefined) {
            return this
        }
        return this
    }

}

const promise = new Promise ((res,rej) => {res("성공")})

promise.then((result) => {
    console.log(result)
})
}





```

### ES8 async await
> ES8에서 탄생한 문법
> promise의 비동기 처리의 내용을 가독성을 높이기 위해서 만들어졌다 .
> async 붙은 함수는 promise를 반환하는 함수가 된다.

```js
const dataFetch = async () => {
    
}
```



## fecth
> api의 내용을 요청할 수 있는 메서드
> api는 요청의 주소 url 내가 요청하는 엔드포인트의 주소를 매개변수로 전달하면 
> json() 메서드 호출해서 사용 json paser json 객체로 변환 

pending Fullfilled Rejected piano playing promise console.log("miss touch")



## 날씨 정보를 가져와서 페이지에 보여주자. 


6b932d4fce1f17ba1b96bf62ca471ece
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}