import { store } from "../../../store"

export const todosWidgetFooterSection = document.querySelector(".todos-widget__footer-section")

store.subscribe(updatedStore => todosWidgetFooterSection.textContent = `${store.activeCount} items left`)