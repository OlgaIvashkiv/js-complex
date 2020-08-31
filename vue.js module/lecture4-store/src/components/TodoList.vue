<template>
    <div>
        <ul>
            <li v-for="(item, i) in todolist" :key="i">
                <TodoItem :item="item"/>
            </li>
        </ul>

    </div>
</template>

<script>


    import {todoListModule} from "../store/TodoList/todolist";
    import {createNamespacedHelpers} from "vuex";
    import {TODOS} from "../store/TodoList/types";
    import TodoItem from "./TodoItem";

   const {mapGetters} = createNamespacedHelpers(todoListModule)

    export default {
        name: 'TodoList',
        components:{
          TodoItem
        },
        computed:{
            ...mapGetters({
                todolist: TODOS

            })
        }
    }

</script>