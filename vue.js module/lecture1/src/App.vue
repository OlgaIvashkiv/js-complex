<template>
  <div>
    <input type="text" v-model="text">
    <button @click="addList" v-if="arr.length<10">Add</button>

    <ul>
      <li v-for="(item, i) in arr"
          :key="i"
      >
        {{item}}
      <button @click="removeList(i)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',

  data(){
    return{
        arr:[],
        text:'',
    }
  },
  methods:{
      addList(){
        this.arr.push(this.text)
      },
      removeList(i){
          this.arr.splice(i,1)
      }
  }
}
</script>

<style>

</style>
