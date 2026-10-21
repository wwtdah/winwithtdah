<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
        //const contactURL = ref("https://scrimba.com")


		
		///// IMPORT COMPONENTS


		
		///// VARIABLES NAMES
</script>



<!-------------------- HTML TEMPLATE -->
<template>
    <nav>
        <ul class="unset">
            <li>
                <router-link to="/">Accueil</router-link>
                <router-link :to="{ name: 'Contact' }">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>


<!-------------------- STYLE -->
<style scoped>

</style>