<template>
  <div>
  <AddToDo/>
  <ToDoList/>
  </div>
</template>

<script>


import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

export default {
  name: 'App',
components:{
  AddToDo,
  ToDoList
}
}
</script>

<style>

</style>
