<template>
    <div>
        <ul>
            <li>
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ToDoItem',
        props:{
            item:{
                type: String,
                required: true
            }
        }
    }
</script>