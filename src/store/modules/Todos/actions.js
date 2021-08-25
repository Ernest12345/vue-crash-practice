import { ADD_TODO, SET_ERROR, SET_LOADING } from './types.'
import axios from 'axios'

export default {
  async getTodosAsync ({ commit }) {
    commit(SET_LOADING, true)
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      console.log(data)
      commit(ADD_TODO, data)
    } catch (e) {
      commit(SET_ERROR, e)
    } finally {
      commit(SET_LOADING, false)
    }
  }
}
