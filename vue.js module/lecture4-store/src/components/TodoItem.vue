<template>
    <div>
        <ul>
            <li v-for="(item, i) in todolist" :key="i">
                todo: {{item.text}}
            <button @click="remove">Remove</button>
            </li>


        </ul>
    </div>
</template>

<script>

import {todoListModule} from "../store/TodoList/todolist";
import {createNamespacedHelpers} from "vuex";
import {REMOVE_TODO} from "../store/TodoList/types";

const {mapActions} = createNamespacedHelpers(todoListModule)
    export default {
        name: 'TodoItem',
        props: {
            todolist:{
                type:Array

            }
        },
        methods:{
            ...mapActions({
                removeTodo: REMOVE_TODO
            }),
            async remove(){
                try {
                    await this.removeTodo(this.item.id)
                }catch(e){
                    console.log(e)
                }

            }
        }
    }
</script>