<template>
    <div>
        <ul>
            <li>
                {{arrItem}}
                <button @click="removeItem(arrItem)">Remove</button>
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
        data(){
            return{
                arrItem: this.item
            }
        },
        methods:{
            removeItem(arrItem){
                this.$emit('removeToDoItem', arrItem)
            }
        }
    }
</script>