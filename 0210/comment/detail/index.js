const getQueryContent = () => {
    const [searchArr] = location.search.replace('?','').split('&').map((e)=>e.split('=')).filter((e) => e[0] === 'index')
    const index = parseInt(searchArr[1])
    const data = JSON.parse(localStorage.getItem('comment'))[index]
    return data
}

const render = (data) => {
    uid.innerHTML = data.uid
    title.innerHTML = data.title
    content.innerHTML = data.content
}



const init = () => {
    const data = getQueryContent()
    render(data)
}
init()