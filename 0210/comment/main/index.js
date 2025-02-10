// 데이터베이스의 유저정보 
// 로그인 상태는 쿠키의 값이 있으면 로그인 상태다.
// 쿠키값을 가지고 유저정보 검증 
// 쿠키도 결국 브라우저에 저장되는 문자열의 형태 

const user = {
    uid : 'soon'
}

class Comment {
    constructor(title, content) {
        this.uid = user.uid
        this.title = title
        this.content = content
    }
}

const localStorageValue = JSON.parse(localStorage.getItem('comment'))
const arr = localStorageValue || [] // | 값이 있는지 검사를 해서 있으면 1 없으면 0, || 값이 있으면 그 값을 반환한다.

const addComment = (title, content) => {
    if (title.trim() === '' || content.trim() === '') return
    const instance = new Comment(title.trim(), content.trim())
    arr.push(instance)
    localStorage.setItem('comment', JSON.stringify(arr))
}


const creatContent = (index, search) => {
    let item
    if (search) item = search[index]
    else item = arr[index]
    const ul = document.createElement('ul')
    const li_uid = document.createElement('li')
    const li_title = document.createElement('li')
    const li_content = document.createElement('li')
    ul.append(li_uid, li_title, li_content)
    const {uid, title, content} = item
    li_uid.innerHTML = uid
    li_title.innerHTML = title
    li_content.innerHTML = content
    
    ul.onclick = () => {
        location.href = `../detail/index.html?index=${index + (pageIndex - 1) * PAGENUM}`
    }
    content_wrap.append(ul)
}


const render = (arr, search = false) => {
    content_wrap.innerHTML = ''
    arr.forEach((el, index) => {
        if (search) creatContent(index, arr)
        else creatContent(index)  
    })
}
render(arr)



form_wrap.onsubmit = (e) => {
    e.preventDefault()
    const {title, content} = e.target
    addComment(title.value, content.value)
    title.value = ''
    content.value = ''
    render(arr)
}



search_input.onkeyup = (e) => {
    const arrTemp = [...arr]
    const searchArr = arrTemp.filter((el) => el.title.startsWith(e.target.value)) // startWith: 문자열이 매개변수로 전달한 
    render(searchArr, true)
}


const PAGENUM = 5
let pageIndex = 1

const paginationCreate = () => {
    const total = arr.length
    const pages = Math.floor((total + PAGENUM - 1) / PAGENUM)
    for (let i = 0; i < pages; i++) {
        const span = document.createElement('span')
        span.innerHTML = i + 1
        span.onclick = () => {
            pageIndex = i + 1
            paginationContent(pageIndex)
        }
        pagination.append(span)        
    }
}

const paginationContent = (index) => {
    // (현재 페이지 인덱스 - 1) * 페이지의 글 갯수
    let pagingContent = [...arr].splice((index - 1) * PAGENUM, PAGENUM)
    render(pagingContent, true)
}

paginationCreate()
paginationContent(pageIndex)

const setCookie = (key, value, time) => {
    let date = new Date()
    date.setTime(date.getTime() + time*24*60*60*1000)
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/;`

}


const getCookie = (key) => {
    let result
    
    let arr = document.cookie.trim().split(';') // 쿠키의 값이 여러개일 때 ;로 구분
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim().split('=')
        if (key === arr[i][0]) {
            result = arr[i][1]
        }
    }
    return result
}


if (getCookie('login')) {
    login_user.innerHTML = getCookie('login')
    user.uid = getCookie('login')
}




login_btn.onclick = () => {
    setCookie('login', login_input.value, 1)
    setCookie('login2', login_input.value, 1)
    location.reload()
}
const deleteCookie = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}
logout_btn.onclick = () => {
    deleteCookie('login')
    location.reload()
}