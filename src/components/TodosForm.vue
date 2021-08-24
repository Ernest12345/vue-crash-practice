<template>
  <form @submit.prevent="handleSubmit" class="posts-form">
    <input type="text" v-model="todo.title" name="addTodo" autocomplete="off" class="posts-form__input">
    <button type="submit" class="posts-form__btn">
      Add
    </button>
  </form>
</template>
<script>
export default {
  data: () => ({
    todo: {
      id: Date.now(),
      title: '',
      completed: false
    }
  }),
  methods: {
    handleSubmit () {
      this.$store.commit('addTodo', this.todo)
      this.todo = {
        id: Date.now(),
        title: '',
        completed: false
      }
    }
  }
}
</script>
<style lang="scss">
.posts-form{
  display: flex;
  align-items: center;
  margin-top: 100px;
  &__input{
    height: 30px;
    width: 260px;
    padding: 0 10px;
  }
  &__btn{
   padding: 10px 15px;
    background: green;
    color: #fff;
  }
}
</style>
