<template>
  <ul class="todo-list" v-if="allTodos.length && !isTodosLoading">
    <transition-group name="todo-list">
    <TodoItem
      v-for="(todo,index) of allTodos"
      :key="todo.id"
      :todo="todo"
      :index="index"
    />
    </transition-group>
  </ul>
  <h3 class="todo-list__loading" v-else-if="isTodosLoading"> Loading...</h3>
  <h3 class="todo-list__empty" v-else>
    No todos
  </h3>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'todoList',
  components: { TodoItem },
  computed: mapGetters(['allTodos', 'isTodosLoading']),
  methods: {
    ...mapActions(['getTodosAsync'])
  },
  mounted () {
    this.getTodosAsync()
  }
}
</script>

<style lang="scss">
.todo-list{
  margin-top: 20px;
  width: 340px;
  &__empty,&__loading{
    margin-top: 20px;
   }
}
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.4s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.todo-list-move {
  transition: transform 0.4s ease;
}
</style>
