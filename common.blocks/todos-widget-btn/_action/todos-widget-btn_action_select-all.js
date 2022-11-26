import { store } from "../../../store"
import { migrate } from "../../todos-widget/todos-widget";

export const todosWidgetBtnActionSelectAll = document.querySelector(".todos-widget-btn_action_select-all")

todosWidgetBtnActionSelectAll.addEventListener("click", evt => {
    store.forEachTodo(todo => todo.isActive = false)
    migrate(store)
})