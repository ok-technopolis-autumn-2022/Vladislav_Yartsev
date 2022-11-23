export const createTodoRemoveButton = ({onRemove}) => {
    const button = document.createElement("button")
    button.classList.add("btn", "todos__todo-btn_action_remove")
    button.addEventListener("click", evt => onRemove())
    return button
}