<template>
  <div>
  <AddToDo
      @addToDoItem="addToDoItem"
  />
  <ToDoList :arr="arr"/>
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
  },
  data(){
    return {
      arr:[]
    }
  },
  methods:{
    addToDoItem(text){
      this.arr.push(text)
    }
  }
}
</script>

<style>

</style>
