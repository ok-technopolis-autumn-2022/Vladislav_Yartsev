import { store } from "../../../store"
import { migrate } from "../../todos-widget/todos-widget";

const todosWidgetBtnActionSelectAll = document.querySelector(".todos-widget-btn_action_clear")

todosWidgetBtnActionSelectAll.addEventListener("click", evt => {
    store.removeAll(todo => todo.isActive)
    migrate(store)
})