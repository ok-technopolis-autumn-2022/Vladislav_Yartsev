export const createTodoRemoveButton = ({key}) => {
    const button = document.createElement("button")
    button.classList.add("btn", "todos__todo-btn_action_remove")
    button.id = `todo-remove-button-${key}`
    return button
}

export const extractKeyFromTodoRemoveButtonId = id => {
    return parseInt(id.substring("todo-remove-button-".length, id.length))
}