<template>
    <div>
        <h2>My projects</h2>
     <div>
         <input type="text" v-model="todo.text">
         <button @click="submitDataToDB">SubmitToDB</button>
         <ul>
             <li v-for="(item, i) in list" :key="i">
                 ID: {{item.id}} - text: {{item.text}}
                 <button @click="removeToDo(item.id)">Remove</button>
             </li>

         </ul>
     </div>

    </div>
</template>

<script>

    export default {
        name: 'MyProjects',
        data() {
            return {
                todo: {
                    text:''
                },
                list: []
            }
        },
        methods:{
            async getDataFromDB(){
                try {
                    this.$http.get('https://vue-js-module-http.firebaseio.com/toDoList.json')
                        .then((res)=> {
                            return res.json()
                        })
                        .then((res)=>{
                            console.log(res)
                            for (const key in res) {
                                this.list.push({id: key, ...res[key]})
                            }
                        })
                } catch (e){
                    console.log(e)
                }
            },
            async submitDataToDB(){
                try {
                    console.log(this.todo)
                   await this.$http.post('https://vue-js-module-http.firebaseio.com/toDoList.json', this.todo)
                } catch (e){
                    console.log(e)
                }
            },

            async removeToDo(event){
                try {
                    await this.$http.delete(`https://vue-js-module-http.firebaseio.com/toDoList/${event}.json`)

                } catch (e) {
                    console.log(e)
                } finally {
                    this.list = [];
                    this.getDataFromDB()
                }
            }


        },
        beforeMount() {
            this.getDataFromDB()
        }
    }
</script>

<style>

</style>