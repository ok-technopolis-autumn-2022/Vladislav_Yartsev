const createTodoInput = ({key, isActive, onToggle}) => {
    const input = document.createElement("input")
    input.id = `todo${key}`
    input.name = `todo${key}Selected`
    input.type = "checkbox"
    input.ariaLabel = "Select todo"
    input.checked = !isActive
    input.addEventListener("change", evt => onToggle())
    return input
}

const createTodoInputLabel = ({key, text}) => {
    const label = document.createElement("label")
    label.htmlFor = `todo${key}`
    label.textContent = text
    return label
}

export const createTodoCheckbox = ({data, onToggle}) => {
    const todoCheckbox = document.createElement("div")
    todoCheckbox.classList.add("todos__todo-checkbox")
    todoCheckbox.appendChild(createTodoInput({key: data.key, isActive: data.isActive, onToggle}))
    todoCheckbox.appendChild(createTodoInputLabel({key: data.key, text: data.text}))
    return todoCheckbox
}