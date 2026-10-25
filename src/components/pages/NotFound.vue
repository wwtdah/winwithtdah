<!-------------------- SCRIPT VARIABLES -->
<script setup>
		///// IMPORT COMPONENTS
		import Header from '@/components/base/header/HeaderSmall.vue'
		
		import { changeHeaderTitle } from '@/components/base/header/HeaderSmall.vue'
		changeHeaderTitle('Erreur 404', 'Page introuvable')
</script>



<!-------------------- HTML TEMPLATE -->
<template>
	<Header />

	<main>

		<div class="section section-infos">
			<div class="container">
				<p>
					Oups ! La page recherchée n'existe pas. 
				</p>
				<p>
					Retourner à la <router-link to="/" class="highlight">page d'accueil</router-link>.
				</p>
			</div>
		</div>

		<div class="spacer spacer--small"></div>

	</main>
</template>


<!-------------------- STYLE -->
<style scoped>





	/* ---------- INFOS ---------- */
	.section + .section-infos {
		padding-top: 0;
	}

	.infos__inner {
		position: relative;
	}

	.infos__inner:before {
		display: block;
		content: '';
		width: var(--sq);
		height: var(--sq);
		--sq: calc(120 / 16 * 1rem);
		background: url(@/assets/img/text/text_decoration_simple_1.svg) no-repeat 0 0 / cover;
		

		position: absolute;
		z-index: -2;
		top: calc(100% - 0.5 * var(--sq));
		right: calc(-0.5 * var(--sq));
	}

	.a-mail {
		font-weight: 550;
		color: var(--color1-2);
	}

	.a-mail:hover {
		color: var(--color1);
	}

	@media all and (max-device-width: 850px), (max-width: 850px) {
		.infos__inner:before {
			display: none;
		}
	}





	/* ---------- CTA ---------- */
	
	.link-cta {
		position: relative;
		padding: 0 calc(4 * var(--gutter));
	}

	.link-cta:before {
		display: block;
		content: '';
		width: calc(0.7 * var(--sq));
		height: var(--sq);
		background: url(@/assets/img/text/text_decoration_simple_2.svg) no-repeat 50% 50% / 50%;
		
		
		position: absolute;
		z-index: -2;
		top: calc(50% - 0.5 * var(--sq) + var(--padd-top));
		right: calc(-0.5 * var(--sq) + var(--padd-right));

		--sq: calc(280 / 16 * 1rem);
		--padd-top: calc(20 / 16 * 1rem);
		--padd-right: calc(10 / 16 * 1rem);
	}

	@media all and (max-device-width: 350px), (max-width: 350px) {
		.link-cta:before {
			display: none;
		}
	}
</style>