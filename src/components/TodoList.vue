<template>
  <ul class="todo-list">
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
  </ul>
</template>
<script>
import TodoItem from './TodoItem'
export default {
  components: { TodoItem }
}
</script>
<style>
.todo-list{
  margin-top: 20px;
}

</style>
