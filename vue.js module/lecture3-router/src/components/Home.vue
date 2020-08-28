<template>
    <div>
        <h1>My personal page</h1>
        <img class="logo" :src="image"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolor.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda, deleniti distinctio fugit nam nostrum placeat quam rerum sed.</p>
    </div>
</template>

<script>

    const imgLink = require('../../public/leaf-logo.jpg');

    export default {
        name: 'Home',
        data(){
            return{
                image: imgLink
            }
        }
    }
</script>

<style scoped>
.logo {
    height: 200px;

}
</style>