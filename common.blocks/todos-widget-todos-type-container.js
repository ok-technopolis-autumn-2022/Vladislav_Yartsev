import { store } from "../store"

export const todosWidgetTodosTypeContainer = document.querySelector(".todos-widget-todos-type-container")

todosWidgetTodosTypeContainer.addEventListener("change", evt => {
    store.todosType = evt.target.value
})

export const todosWidgetTodosTypeInputs = todosWidgetTodosTypeContainer.querySelectorAll("input[name='todosType']")