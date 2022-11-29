import { store } from "../../../store"

export const todosWidgetBtnActionClear = document.querySelector(".todos-widget-btn_action_clear")

todosWidgetBtnActionClear.addEventListener("click", evt => {
    store.removeAll(todo => todo.isActive)
})