<template>
    <div>
        <ul>
            <li>
                {{item}}
                <button @click="removeItem(item)">Remove</button>
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
        },

        methods:{
            removeItem(item){
                this.$emit('removeToDoItem', item)
            }
        }
    }
</script>