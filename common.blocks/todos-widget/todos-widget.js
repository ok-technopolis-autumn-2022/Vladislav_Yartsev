import { createTodo } from "../todos/__todo/todos__todo"
import { todosWidgetTodos } from "./__todos/todos-widget__todos"
import { todosWidgetFooterSection } from "./__footer-section/todos-widget__footer-section";

export const migrate = store => {
    todosWidgetFooterSection.textContent = `${store.activeCount} items left`
    todosWidgetTodos.querySelectorAll("li")
        .forEach(todo => todo.remove())
    store.suitableTodos
        .forEach(todo => todosWidgetTodos.appendChild(createTodo({
            data: todo,
            onCheckBoxToggle: () => {
                store.toggleIsActive(todo.key)
                migrate(store)
            },
            onRemove: () => {
                store.remove(todo.key)
                migrate(store)
            }
        })))
}