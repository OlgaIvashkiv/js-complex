<template>
  <div>
    <h1>My ToDo-List using Vuex and VueResource</h1>
    <AddTodo/>
    <hr>
    <TodoList/>

  </div>
</template>

<script>


import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {todoListModule} from "./store/TodoList/todolist";
import {GET_TODO} from "./store/TodoList/types";

export default {
  name: 'App',
  components:{
    TodoList,
    AddTodo
  },
  async beforeMount() {
    try {
      await this.$store.dispatch(`${todoListModule}/${GET_TODO}`)
    } catch(e){
      console.log(e)
    }
  }
}
</script>

<style>

</style>
