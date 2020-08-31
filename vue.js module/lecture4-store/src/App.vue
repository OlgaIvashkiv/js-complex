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

export default {
  name: 'App',
  components:{
    TodoList,
    AddTodo
  }
}
</script>

<style>

</style>
