import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_ERROR,
  SET_LOADING,
  TOGGLE_TODO
} from './types.'

export default {
  [ADD_TODO]: (state, todo) => {
    state.todos = [...state.todos, ...todo]
  },
  [DELETE_TODO]: (state, todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
  },
  [TOGGLE_TODO]: (state, todoId) => {
    state.todos = state.todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
  },
  [EDIT_TODO]: (state, payload) => {
    state.todos = state.todos.map(todo => {
      if (todo.id === payload.todoId) {
        todo.title = payload.editedTodo
      }
      return todo
    })
  },
  [SET_LOADING]: (state, loading) => {
    state.isLoading = loading
  },
  [SET_ERROR]: (state, error) => {
    state.error = error
  }
}
