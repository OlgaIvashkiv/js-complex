<template>
    <div>
        <p>Add your todo item:</p>
        <input type="text" v-model="text">
        <button @click="add">Add Todo</button>
    </div>
</template>

<script>
    import {todoListModule} from "../store/TodoList/todolist";
    import {createNamespacedHelpers} from "vuex";
    import {ADD_TODO} from "../store/TodoList/types";

    const {mapActions} = createNamespacedHelpers(todoListModule)

    export default {
        name: 'AddTodo',
        data(){
            return {
                text: ''
            }
        },
        methods: {
            ...mapActions({
                addTodo: ADD_TODO
            }),
           async add(){
                const obj = {
                   text: this.text
               };
               try {
                   await this.addTodo(obj);
                   console.log(obj);
                   this.text='';


               } catch(e){
                   console.log(e);
               }

            }
        }
    }
</script>