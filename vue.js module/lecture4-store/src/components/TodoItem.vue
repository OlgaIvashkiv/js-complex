<template>
    <div>

       <p>todo: {{item.text}}
           <button @click="remove(item.id)">Remove</button>
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
            async remove(id){
                try {
                    console.log(id)
                    await this.removeTodo(id)

                }catch(e){
                    console.log(e)
                }

            }
        },

    }
</script>