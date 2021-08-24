import { createStore } from 'vuex'
import { todosModules } from './modules/Todos'

export default createStore({
  state: {
    isAuth: false
  },
  modules: {
    todos: todosModules
  }
})
