<script setup>
	import { ref } from 'vue'
	import { getAgenda, getObject } from '@/composable/INFOS.js'


	
	///// IMPORT COMPONENTS
	import Navbar from '@/components/base/Navbar.vue'


	
	///// VARIABLES NAMES
	const name = ref('Ememem')
	const test = getAgenda()
	const test2 = getObject()

</script>

<template>
	<Navbar />

	<header>
		<h1>{{ name }}</h1>
	</header>

	<main>
		
		<div class="agenda">
			{{ test }}
			
			<ul>
				<li v-for="(item, key) in test2">
					{{ item.day }} : {{ item.disponibile == true ? 'Présente' : 'Absente' }}
				</li>
			</ul>

		</div>
	</main>
</template>

<style scoped>

</style>
