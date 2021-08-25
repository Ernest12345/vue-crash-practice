<template>
<li class="todo-item">
  <input
    type="checkbox"
    class="todo-item__checkbox"
    @click="handleToggle(todo.id)"
    v-model="completed"
  >
  <input
    type="text" class="todo-item__input"
    ref="todoInput"
    :class="completed && 'todo-item__text--completed'"
    v-model="title">
 <div class="todo-item__btn-block">
   <button @click="handleEdit(todo.id,title)" v-show="todo.title !== title" class="todo-item__btn todo-item--edit-btn">
     edit
   </button>
   <button @click="handleDelete(todo.id)" class="todo-item__btn todo-item--delete-btn">
     X
   </button>
 </div>
</li>
</template>
<script>
import { mapMutations } from 'vuex'
import { DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../store/modules/Todos/types.'
export default {
  props: {
    todo: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      title: this.todo.title,
      completed: this.todo.completed
    }
  },
  methods: {
    ...mapMutations([DELETE_TODO, TOGGLE_TODO, EDIT_TODO]),

    handleDelete (todoId) {
      this.DELETE_TODO(todoId)
    },
    handleToggle (todoId) {
      this.TOGGLE_TODO(todoId)
    },
    handleEdit (todoId, editedTodo) {
      this.EDIT_TODO({ todoId, editedTodo })
    }
  }
}
</script>
<style lang="scss">
.todo-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  margin-top: 20px;
  &__checkbox{
    width: 20px;
    height: 20px;
  }
  &__input{
    border:none;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    &:focus{
      border-bottom: 1px solid deepskyblue;
    }
  }
  &__text--completed{
    text-decoration: line-through;
  }
  &__btn{
    color:#fff;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
    &:active{
      transform: translate(1.2);
    }
  }
  &--edit-btn{
    background: gold;
  }
  &--delete-btn{
    background:crimson;
  }
}
</style>
