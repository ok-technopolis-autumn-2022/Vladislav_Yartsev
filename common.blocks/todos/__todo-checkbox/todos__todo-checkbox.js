const createTodoInput = ({key, isActive}) => {
    const input = document.createElement("input")
    input.id = `todo-${key}`
    input.name = `todo-${key}-selected`
    input.type = "checkbox"
    input.ariaLabel = "Select todo"
    input.checked = !isActive
    return input
}

export const extractKeyFromTodoInputId = id => {
    return parseInt(id.substring("todo-".length, id.length))
}

const createTodoInputLabel = ({key, text}) => {
    const label = document.createElement("label")
    label.htmlFor = `todo-${key}`
    label.textContent = text
    return label
}

export const createTodoCheckbox = ({data}) => {
    const todoCheckbox = document.createElement("div")
    todoCheckbox.classList.add("todos__todo-checkbox")
    todoCheckbox.appendChild(createTodoInput({key: data.key, isActive: data.isActive}))
    todoCheckbox.appendChild(createTodoInputLabel({key: data.key, text: data.text}))
    return todoCheckbox
}