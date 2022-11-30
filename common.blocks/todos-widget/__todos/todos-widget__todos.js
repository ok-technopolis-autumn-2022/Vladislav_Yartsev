import { store } from "../../../store"
import { extractKeyFromTodoRemoveButtonId } from "../../todos/__todo-btn/_action/todos__todo-btn_action_remove"
import { extractKeyFromTodoInputId } from "../../todos/__todo-checkbox/todos__todo-checkbox"
import { createTodo } from "../../todos/__todo/todos__todo"

const todosWidgetTodos = document.querySelector(".todos-widget__todos")

todosWidgetTodos.addEventListener("click", evt => {
    if (evt.target.id.startsWith("todo-remove-button")) {
        store.remove(extractKeyFromTodoRemoveButtonId(evt.target.id))
    }
})

todosWidgetTodos.addEventListener("change", evt => {
    store.toggleIsActive(extractKeyFromTodoInputId(evt.target.id))
})

store.subscribe(updatedStore => {
    todosWidgetTodos.querySelectorAll("li").forEach(todo => todo.remove())
    updatedStore.suitableTodos
        .forEach(todo => todosWidgetTodos.appendChild(createTodo({data: todo})))
})