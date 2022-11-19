export class Store {
    static TodosType = {
        ALL: "All",
        ACTIVE: "Active",
        COMPLETED: "Completed"
    }

    _todosType = Store.TodosType.ALL
    _todos = []

    constructor({todosType, todos} = {}) {
        if (todosType) {
            if (!Store.validateTodosType(todosType)) {
                throw new Error(`Todos type '${todosType}' is invalid`)
            }
            this.todosType = todosType
        }
        if (todos) {
            for (const todo of todos) {
                this._todos.push(todo)
            }
        }
}

    static validateTodosType(todosType) {
        return todosType === Store.TodosType.ALL ||
            todosType === Store.TodosType.ACTIVE ||
            todosType === Store.TodosType.COMPLETED;
    }

    addTodo(todo) {
        this._todos.push(todo)
    }

    toggleIsActive(key) {
        const todoToToggle = this._todos.find(todo => todo.key === key)
        todoToToggle.isActive = !todoToToggle.isActive
    }

    remove(key) {
        this._todos = this._todos.filter(todo => todo.key !== key)
    }

    removeAll(condition) {
        this._todos = this._todos.filter(condition)
    }

    set todosType(todosType) {
        this._todosType = todosType
    }

    get todosType() {
        return this._todosType
    }

    get activeCount() {
        return this._todos.filter(todo => todo.isActive).length
    }

    get suitableTodos() {
        switch (this._todosType) {
            case Store.TodosType.ALL:
                return this._todos
            case Store.TodosType.ACTIVE:
                return this._todos.filter(todo => todo.isActive)
            case Store.TodosType.COMPLETED:
                return this._todos.filter(todo => !todo.isActive)
        }
    }
}

export const store = new Store()