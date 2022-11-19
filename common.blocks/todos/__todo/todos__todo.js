import { createTodoCheckbox } from "../__todo-checkbox/todos__todo-checkbox"
import { createTodoRemoveButton } from "../__todo-btn/_action/todos__todo-btn_action_remove";

export const createTodo = ({data, onCheckBoxToggle, onRemove}) => {
    const todo = document.createElement("li")
    todo.classList.add("todos__todo")
    todo.appendChild(createTodoCheckbox({data, onToggle: onCheckBoxToggle}))
    todo.appendChild(createTodoRemoveButton({key: data.key, onRemove}))
    return todo
}