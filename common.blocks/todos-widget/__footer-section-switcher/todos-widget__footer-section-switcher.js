import { store } from "../../../store";
import { migrate } from "../todos-widget";

const todosWidgetFooterSectionSwitcherInputs = [...document.querySelectorAll(".todos-widget__footer-section-switcher")]
    .map(switcher => switcher.querySelector("input"))

todosWidgetFooterSectionSwitcherInputs.forEach(input => input.addEventListener("change", evt => {
    store.todosType = evt.target.value
    migrate(store)
}))
