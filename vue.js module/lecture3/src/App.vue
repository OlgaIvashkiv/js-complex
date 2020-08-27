<template>
  <div>
    <input type="text" v-model="text">
    <button @click="submitToDo">AddToDo to DB</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      text: {}
    }
  },
  methods:{
    submitToDo(){
      this.$http.post('https://vue-js-module-http.firebaseio.com/toDoList.json',this.text)
              .then((res)=>{
                console.log(res)
              })
    }
  }
}
</script>

<style>


</style>
