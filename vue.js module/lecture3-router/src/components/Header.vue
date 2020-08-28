<template>
    <div>
        <ul class="nav nav-pills nav-fill" style="cursor: pointer">

            <router-link class="nav-item nav-link"
                         active-class="active" exact
                         to="/"
                         tag="li"
            >Home
            </router-link>

            <router-link class="nam-item nav-link"
                         active-class="active"
                         to="/contacts"
                         tag="li"
            >Contacts
            </router-link>

            <router-link class="nav-item nav-link"
                         active-class="active"
                         to="myprojects"
                         tag="li"
            >My Projects
            </router-link>


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