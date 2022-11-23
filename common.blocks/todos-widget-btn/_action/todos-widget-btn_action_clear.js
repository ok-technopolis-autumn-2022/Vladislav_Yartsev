import { store } from "../../../store"
import { migrate } from "../../todos-widget/todos-widget";

export const todosWidgetBtnActionClear = document.querySelector(".todos-widget-btn_action_clear")

todosWidgetBtnActionClear.addEventListener("click", evt => {
    store.removeAll(todo => todo.isActive)
    migrate(store)
})