<template>
    <div>
        <input type="text" v-model="text">
        <button @click="addItem(text)">Add todo</button>
    </div>
</template>

<script>
    export default {
        name: 'AddToDo',
        data(){
            return{
                text:''
            }
        },
        methods:{
            addItem(){

                this.$emit('addToDoItem', this.text)
            }
        }
    }
</script>