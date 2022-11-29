import { store } from "../../../store"
import { generateUniqueKey } from "../../utils"

document.querySelector(".todos-widget__header-form")
    .addEventListener("submit", evt => {
        evt.preventDefault()
        store.addTodo({key: generateUniqueKey(), text: evt.target.newTodoText.value, isActive: true})
        evt.target.newTodoText.value = ""
    })