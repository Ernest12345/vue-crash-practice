<template>
  <form @submit.prevent="handleSubmit" class="posts-form">
    <input type="text" v-model="title" class="posts-form__input">
    <button type="submit" class="posts-form__btn">
      Add
    </button>
  </form>
</template>
<script>
export default {
  data: () => ({
    id: Date.now(),
    title: ''
  }),
  methods: {
    handleSubmit () {
      console.log(this.id)
      console.log(this.title)
    }
  }
}
</script>
<style lang="scss">
.posts-form{
  display: flex;
  align-items: center;
  &__input{
    height: 30px;
    width: 220px;
  }
  &__btn{
   padding: 10px 15px;
    background: green;
    color: #fff;
  }
}
</style>
