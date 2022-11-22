import { store } from "../../../store";
import { migrate } from "../todos-widget";

document.querySelector(".js-todos-type-container")
    .addEventListener("change", evt => {
        store.todosType = evt.target.value
        migrate(store)
    })