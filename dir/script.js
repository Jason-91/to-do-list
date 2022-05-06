const listsContainer = document.querySelector('[data-lists]')   

let lists = ['Task List 1', 'Task List 2']

function render() {
    clearElement(listsContainer)
    lists.forEach(list =>{
        const listElement = document.createElement('li')
        listElement.classList.add("inactive-list-item")
        listElement.innerText = list
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()