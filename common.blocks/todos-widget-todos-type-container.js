import { store } from "../store"
import { migrate } from "./todos-widget/todos-widget"

document.querySelector(".todos-widget-todos-type-container")
    .addEventListener("change", evt => {
        store.todosType = evt.target.value
        migrate(store)
    })