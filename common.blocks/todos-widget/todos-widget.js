import { createTodo } from "../todos/__todo/todos__todo"
import { todosWidgetTodos } from "./__todos/todos-widget__todos"
import { todosWidgetFooterSection } from "./__footer-section/todos-widget__footer-section"
import { store } from "../../store"
import { extractKeyFromTodoInputId } from "../todos/__todo-checkbox/todos__todo-checkbox"
import { extractKeyFromTodoRemoveButtonId } from "../todos/__todo-btn/_action/todos__todo-btn_action_remove"
import { todosWidgetTodosTypeContainer, todosWidgetTodosTypeInputs } from "../todos-widget-todos-type-container";

todosWidgetTodos.addEventListener("change", evt => {
    store.toggleIsActive(extractKeyFromTodoInputId(evt.target.id))
    migrate(store)
})

todosWidgetTodos.addEventListener("click", evt => {
    if (evt.target.id.startsWith("todo-remove-button")) {
        store.remove(extractKeyFromTodoRemoveButtonId(evt.target.id))
        migrate(store)
    }
})

todosWidgetTodosTypeContainer.addEventListener("change", evt => {
    store.todosType = evt.target.value
    migrate(store)
})

export const migrate = store => {
    todosWidgetFooterSection.textContent = `${store.activeCount} items left`
    todosWidgetTodosTypeInputs.forEach(input => input.checked = input.value === store.todosType)
    todosWidgetTodos.querySelectorAll("li")
        .forEach(todo => todo.remove())
    store.suitableTodos
        .forEach(todo => todosWidgetTodos.appendChild(createTodo({data: todo})))
}