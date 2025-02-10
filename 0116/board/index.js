console.log(document.querySelector(".boarder"))


header.innerHTML += `
<div>
    안녕하세요
    <div>내 제목</div>
</div>
`


const boarder = document.querySelector(".boarder");


let contentArr = [];

const creatContent = (index, title, content) => {
    const _li = document.createElement("li");
    const _span01 = document.createElement("span");
    const _span02 = document.createElement("span");
    const _span03 = document.createElement("span");

    _li.append(_span01, _span02, _span03)


    // input요소는 value라는 속성을 갖고있고 value에는 우리가 입력한 값이 담긴다.
    _span01.innerHTML = index
    _span02.innerHTML = title
    _span03.innerHTML = content

    boarder.append(_li);
}

const addContent = () => {
    const content = {
        index: contentArr.length + 1,
        title: title_input.value,
        content: content_input.value
    }

    contentArr.push(content);
    console.log(contentArr)
    render();



}

const render = () => {
    // 화면에 추가한 글 내용을 보여주는 함수
    // 다시 화면을 렌더링하기전에 게시글을 생성할때 초기화를 한번 해준다.

    boarder.innerHTML = `
<li>
    <span>번호</span>
    <span>제목</span>
    <span>내용</span>
</li> 
`


    for (let i = 0; i < contentArr.length; i++) {
        // 참조타입은 구조분해 할당 
        // 객체 안에 있는 키의 이름으로 할당한다.
        // 객체의 구조분해할당
        const {index : num, title, content} = contentArr[i];
        console.log(num, title, content)
        creatContent(num, title, content);        
    }
}



create.onclick = addContent;

