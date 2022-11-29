export class Store {
    static TodosType = {
        ALL: "All",
        ACTIVE: "Active",
        COMPLETED: "Completed"
    }

    _todosType = Store.TodosType.ALL
    _todos = []
    _observers = []

    constructor({todosType, todos} = {}) {
        if (todosType) {
            Store.checkTodosType(todosType)
            this.todosType = todosType
        }
        if (todos) {
            todos.forEach(this.addTodo)
            // for (const todo of todos) {
            //     this._todos.push(todo)
            // }
        }
    }

    static checkTodosType(todosType) {
        if (!Store.validateTodosType(todosType)) {
            throw new Error(`Todos type '${todosType}' is invalid`)
        }
    }

    static validateTodosType(todosType) {
        return Object.values(Store.TodosType).includes(todosType)
    }

    subscribe(observer) {
        this._observers.push(observer)
        observer(this)
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs != observer)
    }

    notify() {
        this._observers.forEach(obs => obs(this))
    }

    addTodo(todo) {
        this._todos.push(todo)
        this.notify()
    }

    toggleIsActive(key) {
        const todoToToggle = this._todos.find(todo => todo.key === key)
        todoToToggle.isActive = !todoToToggle.isActive
        this.notify()
    }

    remove(key) {
        this._todos = this._todos.filter(todo => todo.key !== key)
        this.notify()
    }

    removeAll(condition) {
        this._todos = this._todos.filter(condition)
        this.notify()
    }

    set todosType(todosType) {
        Store.checkTodosType(todosType)
        this._todosType = todosType
        this.notify()
    }

    get todosType() {
        return this._todosType
    }

    get activeCount() {
        return this._todos.filter(todo => todo.isActive).length
    }

    forEachTodo(consumer) {
        this._todos.forEach(consumer)
        this.notify()
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