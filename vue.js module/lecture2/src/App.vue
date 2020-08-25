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
      arr:[],
      item:''
    }
  },
  methods:{
    addToDoItem(text){
      this.arr.push(text)

    },
    removeToDo(item){
        const idx = this.arr.findIndex(e => e === item);
        this.arr.splice(idx, 1)
    }
  }
}
</script>

<style>

</style>
