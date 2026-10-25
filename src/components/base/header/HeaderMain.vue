<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
		
		
		///// IMPORT COMPONENTS
		import Navbar from '@/components/base/Navbar.vue'
		import HeaderIMG from '@/assets/img/photos/Header_Image1.png'
		import BorderSVG from '@/components/svg/SVG_BorderLarge.vue'

		// import LogoText from '@/components/svg/SVG_LogoText.vue'
		// import BackgroundSVG from '@/components/svg/SVG_BackgroundHeaderLarge.vue'
		
		import { changeIsLargeLogo } from '@/components/svg/SVG_LogoText.vue'
		import { changeIsColored } from '@/components/base/Navbar.vue'
		
		changeIsLargeLogo(true)
		changeIsColored(false)


		
		///// VARIABLES NAMES
</script>



<!-------------------- HTML TEMPLATE -->
<template>
		<Navbar/>
	<header>
		

		<div class="section header-section header--large">

			<!-- <BackgroundSVG class="header__background"/> -->
			<div class="container">
				<article class="header">
					<!-- <LogoText class="header__logo"/> -->

					<div class="header__title">
						<h1>
							<div class="title-header1">
								Win with
							</div>

							<div class="title-header2">
								TDA/H
							</div>
						</h1>
					</div>

					<div class="header__subtitle">
						<div class="bold">
							Soutien scolaire
						</div>
						<div>
							Enfants 6 - 12 ans
						</div>
						<div class="small">
							Marie Daneels
						</div>
					</div>
				</article>
			</div>
		</div>
		
		<div class="header__image image-header">
			<BorderSVG class="header__border large-border large-border--top"/>
			<img :src="HeaderIMG" class="image-header__image">
			<BorderSVG class="header__border large-border large-border--bottom"/>
		</div>
    </header>
</template>


<!-------------------- STYLE -->
<style scoped>
	.header-section {
		position: relative;
        
        background-image: url(@/assets/img/text/background_header_large.svg);
        background-position: -5% 40%;
        background-size: 85%;
        background-repeat: repeat;
	}

	.header__background {
		position: absolute;
		width: 100vw !important;
		max-width: calc(1500 / 16 * 1rem) !important;
		z-index: 1;
		top: -15%;
		left: 0;
		overflow: visible;
	}

	.header {
		display: grid;
		grid-template:
			"title . subtitle" auto
			/ auto var(--padd-w) 1fr;
		--padd-w: var(--gap-big);
		padding: var(--padd-h1) 0 var(--padd-h2);
		--padd-h1: var(--gap-small);
		--padd-h2: var(--gap);
		position: relative;
		z-index: 10;
	}
	
	@media all and (max-device-width: 1350px), (max-width: 1350px) {
		.header {
			--padd-w: var(--gap-small);
		}
	}
	
	@media all and (max-device-width: 950px), (max-width: 950px) {
		.header {
			grid-template:
				"title title" auto
				"subtitle subtitle" auto
				/ 1fr 1fr;
		}
	}

	.header__title {
		grid-area: title;
	}

	.header__title h1 {
		color: var(--color1-2);
		line-height: 1;
		--vw: 3vw;
	}

	.title-header1 {
		font-size: calc(var(--vw) + 40 / 16 * 1rem);
		font-weight: 350;
	}

	.title-header2 {
		font-size: calc(var(--vw) + 70 / 16 * 1rem);
		font-weight: 400;
	}

	.header__subtitle {
		grid-area: subtitle;
		align-self: end;

		font-size: calc(36 / 16 * 1rem);
		line-height: 1.25;
		color: var(--nb5);
	}
	
	@media all and (max-device-width: 950px), (max-width: 950px) {
		.header__subtitle {
			font-size: calc(1vw + 24 / 16 * 1rem);
		}
	}





	/* ---------- IMAGE ---------- */

	.image-header {
		position: relative;
		height: 80vh;
		margin-top: calc(-20 / 16 * 1rem);
	}

	@media all and (max-device-width: 600px), (max-width: 600px) {
		.image-header {
			max-height: calc(500 / 16 * 1rem);
		}
	}

	.image-header__image {
		display: block;
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 100;
	}

	.image-header .large-border {
		z-index: 120;
		--min-width: calc(1200 / 16 * 1rem);
	}

	.image-header .large-border--top {
		--color: var(--color3);
	}

	.image-header .large-border--bottom {
		--color: var(--color2);
	}
</style>