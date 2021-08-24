import todosMutations from './mutations'

export const todosModules = {
  state: {
    todos: [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      }
    ],
    isLoading: false,
    error: null
  },
  mutations: todosMutations,
  actions: {},
  getters: {
    allTodos: (state) => {
      return state.todos
    },
    isTodosLoading: (state) => {
      return state.isLoading
    }
  }
}
