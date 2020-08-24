<template>
    <div>
    <ToDoItem v-for="(item, i) in arr"
              :key="i"
              :item="item"
    />
    </div>
</template>

<script>
    import ToDoItem from "./ToDoItem";

    export default {
        name: 'ToDoList',
        components:{
            ToDoItem
        },
        props:{
            arr:{
                type: Array,
                required: true
            }
        }
    }
</script>