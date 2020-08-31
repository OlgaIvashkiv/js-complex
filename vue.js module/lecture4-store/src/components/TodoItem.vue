<template>
    <div>
        <p>todo: {{item.text}}
            <button @click="remove">Remove</button>
        </p>
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
            item:{
                type:Object

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