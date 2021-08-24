export default {
  addTodo: (state, todo) => {
    state.todos.push(todo)
  },
  deleteTodo: (state, todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
  },
  toggleTodo: (state, todoId) => {
    state.todos = state.todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
  },
  editTodo: (state, payload) => {
    console.log(payload)
    state.todos = state.todos.map(todo => {
      if (todo.id === payload.todoId) {
        todo.title = payload.editedTodo
      }
      return todo
    })
  }
}
