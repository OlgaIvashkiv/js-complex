<template>
    <div>
        <ul class="nav nav-pills nav-fill">

                <router-link class="nav-item nav-link" active-class="active" exact to="/">Home</router-link>


                <router-link class="nam-item nav-link" active-class="active" to="/contacts">Contacts</router-link>


                <router-link class="nav-item nav-link" active-class="active" to="myprojects">My Projects</router-link>


        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Header',

    }
</script>

<style>

</style>