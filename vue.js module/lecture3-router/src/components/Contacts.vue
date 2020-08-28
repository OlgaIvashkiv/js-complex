<template>
    <div>
        <h2>Contacts</h2>
        <p>My name is {{user.name}} {{user.surname}}.</p>
        <p>I'm from {{user.address}}.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35717.06075973354!2d25.937973147056784!3d48.2896482954627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1598627811511!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>

<script>

export default {
    name: 'Contacts',
    data(){
        return{
            user: {
                name: 'Olga',
                surname: 'Ivashkiv',
                address: 'Chernivtsi'
            }
        }
    }
    }
</script>

<style>

</style>
