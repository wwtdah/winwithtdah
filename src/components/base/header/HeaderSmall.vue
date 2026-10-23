<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
		
		
		///// IMPORT COMPONENTS
		import Navbar from '@/components/base/Navbar.vue'
		import BackgroundSVG from '@/components/svg/SVG_BackgroundHeaderSmall.vue'
		import BorderSVG from '@/components/svg/SVG_BorderLarge.vue'
		
		import { changeIsColored } from '@/components/base/Navbar.vue'
		
		changeIsColored(true)
</script>



<!-------------------- HTML TEMPLATE -->
<template>
	<Navbar/>
		

	<header>
		<div class="section header-section header--small">
			<div class="container">
				<div class="header">
					<h1>
						Contact
					</h1>

					<p>
						Informations et formulaire de contact
					</p>
				</div>
			</div>
			<BackgroundSVG class="header__background"/>
			<BorderSVG class="header__border large-border large-border--bottom"/>
		</div>
	</header>
</template>


<!-------------------- STYLE -->
<style scoped>
	h1 {
		color: var(--nb0);
	}

	.header p {
		margin: 0;
	}

	.header-section {
		position: relative;
		
		background: var(--color1-2);

		color: var(--color-main);
		--color-main: var(--nb0);
	}

	.header__background {
		position: absolute;
		width: 100vw;
		height: 100%;
		min-width: calc(1000 / 16 * 1rem);
		max-width: calc(1500 / 16 * 1rem);
		z-index: 1;
		top: 0;
		left: 0;
		overflow: visible;
	}

	.header {
		position: relative;
		z-index: 10;
	}
</style>