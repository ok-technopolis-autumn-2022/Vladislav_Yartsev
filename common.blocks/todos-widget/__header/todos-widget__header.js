import { store } from "../../../store"
import { migrate } from "../todos-widget"

const todosWidgetHeader = document.querySelector(".todos-widget__header")

let key = 1

todosWidgetHeader.addEventListener("keydown", evt => {
    if (evt.key === "Enter") {
        store.addTodo({key: key++, text: evt.target.value, isActive: true})
        migrate(store)
    }
})