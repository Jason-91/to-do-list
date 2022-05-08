const listsContainer = document.querySelector('[data-lists]')   
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

const local_storage_list_key = 'task.lists'
const local_storage_selected_list_id_key ='task.selectedListId'
let lists = JSON.parse(localStorage.getItem(local_storage_list_key)) || []
let selectedListId = localStorage.getItem(local_storage_selected_list_id_key)

newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

function createList(name){
    return {id: Date.now().toString(), name: name, tasks: []}
}

function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(local_storage_list_key, JSON.stringify(lists))
}

function render() {
    clearElement(listsContainer)
    lists.forEach(list =>{
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("inactive-list-item")
        listElement.innerText = list.name
        if (list.id === selectedListId) {
            listElement.classList.add('active-list-item')
        }
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()