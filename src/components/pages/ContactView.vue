<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'

		
		///// IMPORT COMPONENTS
		import Header from '@/components/base/header/HeaderSmall.vue'
		import CtaBackground from '@/components/svg/SVG_CTABackground.vue'
		import CtaArrow from '@/components/svg/SVG_CTAArrow.vue'
</script>



<!-------------------- HTML TEMPLATE -->
<template>
	<Header />

	<main>

		<div class="section section-infos">
			<div class="container">
				<article class="infos">
					<ul class="unset infos__table table table--3 table--3-2 table--color1-4">
						<li>
							<div class="infos__location table__article">
								<h3 class="article-table__title">Adresse</h3>

								<p>
									<b>Centre Cap Santé</b>
								</p>
								<p>
									Avenue Albert 1er, 13 <br>
									1342 Limelette
								</p>
							</div>
						</li>
						<li>
							<div class="infos__price table__article">
								<h3 class="article-table__title">Horaires</h3>

								<p>
									<b>Les mercredis</b>
								</p>

								<p>
									13h30 à 15h00 <br>
									ou 15h00 à 16h30
								</p>
							</div>
						</li>
						<li>
							<div class="infos__calendar table__article">
								<h3 class="article-table__title">Prix</h3>

								<p>
									35€/1h30 de suivi par enfant
								</p>
							</div>
						</li>
					</ul>
				</article>

			</div>
		</div>

		<div class="section section-infos">
			<div class="container">
				
				<article class="infos">
					<div class="infos__inner mainblock column gap--big">
						<p>Vous souhaitez réserver une session pour un enfant de primaire ? Merci de remplir le formulaire ci-dessous avec vos informations.</p>
					
						<p>
							Pour toute question ou information supplémentaire, n'hésitez pas à directement nous écrire par mail via <a href="mailto:winwithtdah@gmail.com" class="a-mail">winwithtdah@gmail.com</a>.
						</p>
					</div>
				</article>

				<div class="spacer spacer--small"></div>

				<article class="infos-cta">
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSdyRT9itALckxNacr6hrkNmitT8EPECLuCK6lheaZbmNn_aUg/viewform?usp=publish-editor" target="_blank">
							<span class="link-cta">
						
								<span class="link-cta__text">Formulaire</span>
								<CtaArrow class="link-cta__arrow"></CtaArrow>
								<CtaBackground class="link-cta__background">
								</CtaBackground>
							</span>
						</a>
				</article>
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