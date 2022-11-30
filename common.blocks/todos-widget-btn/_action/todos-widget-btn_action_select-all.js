import { store } from "../../../store"

export const todosWidgetBtnActionSelectAll = document.querySelector(".todos-widget-btn_action_select-all")

todosWidgetBtnActionSelectAll.addEventListener("click", evt => {
    store.forEachTodo(todo => todo.isActive = false)
})