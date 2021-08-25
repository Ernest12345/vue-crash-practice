<template>
  <form @submit.prevent="handleSubmit" class="posts-form">
    <input type="text" v-model="todo.title" name="addTodo" autocomplete="off" class="posts-form__input">
    <button type="submit" class="posts-form__btn">
      Add
    </button>
  </form>
</template>
<script>
import { mapMutations } from 'vuex'
import { ADD_TODO } from '../store/modules/Todos/types.'

export default {
  data: () => ({
    todo: {
      id: Date.now(),
      title: '',
      completed: false
    }
  }),
  methods: {
    ...mapMutations([ADD_TODO]),
    handleSubmit () {
      if (this.todo.title) {
        this.ADD_TODO([this.todo])
        this.todo = {
          id: Date.now(),
          title: '',
          completed: false
        }
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
