<template>
    <div>
        <input type="text" v-model="text">
        <button @click="addItem(text)" v-if="arr.length<10">Add todo</button>
    </div>
</template>

<script>
    export default {
        name: 'AddToDo',
        props:{
            arr:{
                type: Array,
                required: true
            }
        },
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