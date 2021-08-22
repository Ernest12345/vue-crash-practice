<template>
<li class="todo-item">
  <input type="checkbox" class="todo-item__checkbox">
  <input type="text" class="todo-item__input" defaultValue="test234">
  <button class="todo-item__btn todo-item--edit-btn">
    edit
  </button>
  <button class="todo-item__btn todo-item--delete-btn">
    X
  </button>
</li>
</template>
<script>
export default {
  props: {

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
