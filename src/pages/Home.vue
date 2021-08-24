<template>
  <div class="home container">
    <TodosForm/>
    <TodoList/>
  </div>
</template>

<script>
import TodosForm from '@/components/TodosForm'
import TodoList from '@/components/TodoList'
export default {
  name: 'Home',
  components: { TodoList, TodosForm }
}
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
