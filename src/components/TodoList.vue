<template>
  <ul class="todo-list" v-if="allTodos.length">
    <transition-group name="todo-list">
    <TodoItem
      v-for="(todo,index) of allTodos"
      :key="todo.id"
      :todo="todo"
      :index="index"
    />
    </transition-group>
  </ul>
  <h2 class="todo-list__empty" v-else>
    No todos
  </h2>
</template>
<script>
import { mapGetters } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'todoList',
  components: { TodoItem },
  computed: mapGetters(['allTodos'])
}
</script>

<style lang="scss">
.todo-list{
  margin-top: 20px;
  width: 340px;
  &__empty{
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
