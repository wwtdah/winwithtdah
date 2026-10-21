<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
        const contactURL = ref("https://scrimba.com")


		
		///// IMPORT COMPONENTS


		
		///// VARIABLES NAMES
</script>



<!-------------------- HTML TEMPLATE -->
<template>
    <nav>
        <ul class="unset">
            <li><a href="/">Home</a></li>
            <li><a :href="contactURL">erererer</a></li>
        </ul>
    </nav>
</template>


<!-------------------- STYLE -->
<style scoped>

</style>