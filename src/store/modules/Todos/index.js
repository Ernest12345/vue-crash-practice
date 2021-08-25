import todosMutations from './mutations'
import todosGetters from './getters'
import todosActions from './actions'

export const todosModules = {
  state: {
    todos: [],
    isLoading: false,
    error: null
  },
  actions: todosActions,
  mutations: todosMutations,
  getters: todosGetters
}
