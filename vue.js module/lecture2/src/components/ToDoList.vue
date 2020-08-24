<template>
    <div>
    <ToDoItem/>
    </div>
</template>

<script>
    import ToDoItem from "./ToDoItem";

    export default {
        name: 'ToDoList',
        components:{
            ToDoItem
        }
    }
</script>