import * as todosWidget from "./common.blocks/todos-widget/todos-widget.js"
import * as todosWidgetHeaderForm from "./common.blocks/todos-widget/__header-form/todos-widget__header-form.js"
import * as todosWidgetBtnActionSelectAll from "./common.blocks/todos-widget-btn/_action/todos-widget-btn_action_select-all.js"
import { store } from "./store"

todosWidget.migrate(store)