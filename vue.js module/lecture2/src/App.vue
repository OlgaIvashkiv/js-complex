<template>
  <div>
  <AddToDo
          :arr="arr"
      @addToDoItem="addToDoItem"
  />
  <ToDoList
          :arr="arr"
          @removeToDo="removeToDo"
  />
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

    },
    removeToDo(arrItem){
      this.arr.splice(arrItem,1)
    }
  }
}
</script>

<style>

</style>
