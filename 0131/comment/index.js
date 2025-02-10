let data = []


class Comment {
    constructor(_index, _value, _name, _image) {
        this.index = _index
        this.value = _value
        this.name = _name
        this.image= _image
    }
}





const render = () => {
    for (let i = 0; i < data.length; i++) {
        const ul = document.createElement("ul")
        const li_01 = document.createElement("li")
        const li_02 = document.createElement("li")
        const li_03 = document.createElement("li")
        const li_04 = document.createElement("li")
        const image_tag = document.createElement("img")
        li_03.append(image_tag)
        ul.append(li_01,li_02,li_03,li_04)
        
        const {index, value, name, image} = data[i]
        li_01.innerHTML = index
        li_02.innerHTML = value
        li_04.innerHTML = name
        image_tag.src = "./images/" + image
        
        document.querySelector(".content").append(ul);
        
        const commentDeleteBtn = document.createElement("span")
        commentDeleteBtn.innerHTML = "삭제"
        commentDeleteBtn.classList.add("comment-delete-btn")
        li_01.append(commentDeleteBtn)          
        commentDeleteBtn.onclick = () => {
            data.splice(i,1)
            const content_json = JSON.stringify(data); 
            localStorage.setItem("mymy", content_json)
            location.reload();
        } 
        const commentUpdateBtn = document.createElement("span")
        commentUpdateBtn.innerHTML = "수정"
        commentUpdateBtn.classList.add("comment-update-btn")
        li_01.append(commentUpdateBtn)          
        commentUpdateBtn.onclick = () => {
            if (li_02.childElementCount < 1) {
                const updateInput = document.createElement("input")
                const updateInput2 = document.createElement("input")
                const updateInput3 = document.createElement("input")
                updateInput3.type = "file"
                li_02.append(updateInput)          
                li_04.append(updateInput2)          
                li_03.append(updateInput3)     
                console.dir(updateInput3.files)
            
                updateInput.onkeyup = (e) => {
                    if (e.keyCode !== 13) return;
                    data[i].value = updateInput.value;
                    data[i].name = updateInput2.value;
                    data[i].image = updateInput3.files[0].name
                    const content_json = JSON.stringify(data); 
                    localStorage.setItem("mymy", content_json)
                    location.reload();
                }
            }
        }
        
        
        
        
        
    }
}



const submitHandler = (e) => {
    const {content_value, content_name, content_image} = e.target;
    const comment = new Comment(data.length + 1, content_value.value, content_name.value, content_image.files[0].name)
    data.push(comment)
    const content_json = JSON.stringify(data); 
    localStorage.setItem("mymy", content_json)
}



const init = () => {
    if (localStorage.getItem("mymy")) {
        const _data = JSON.parse(localStorage.getItem("mymy"))
        data = _data
    }
    render()
}
init();


content_form.onsubmit = submitHandler;  