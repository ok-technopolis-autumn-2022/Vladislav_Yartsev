import { store } from "../../../store"
import { generateUniqueKey } from "../../utils";
import { migrate } from "../todos-widget";

document.querySelector(".todos-widget__header-form")
    .addEventListener("submit", evt => {
        evt.preventDefault()
        store.addTodo({key: generateUniqueKey(), text: evt.target.newTodoText.value, isActive: true})
        migrate(store)
    })