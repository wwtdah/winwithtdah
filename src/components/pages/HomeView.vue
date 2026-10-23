<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
		
		
		///// IMPORT COMPONENTS
		import Header from '@/components/base/header/HeaderMain.vue'
		import CtaBackground from '@/components/svg/SVG_CTABackground.vue'
		import CtaArrow from '@/components/svg/SVG_CTAArrow.vue'


		
		///// VARIABLES NAMES
</script>



<!-------------------- HTML TEMPLATE -->
<template>
	<Header />

	<main>

		<div class="section concept-section">
			<div class="container">
				<article class="concept">
					<div class="mainblock">
						<h2 class="concept__title decorated-title decorated-title--big decorated-title--border-color3 decorated-title--round-color1-2">
							<span>Notre concept</span>
						</h2>
					</div>
					<div class="mainblock column gap--big">
						<p>Je fonctionne par groupe de 4 enfants maximum durant 1 heure trente. Durant cette plage horaire, nous faisons les devoirs et les leçons du jour et nous essayons d’avancer sur ceux de toute la semaine. Nous fonctionnons aussi en cours individuels durant les congés scolaires (séance d’une heure).</p>
						
						<p>
							<i>Pourquoi des cours collectifs et non individuels?</i> L’enfant est non stop seul en séance de lagopède, de psychomotricité, de neuropsychologue,… Mais jamais il ne se retrouve avec d’autres enfants qui vivent des choses similaires à lui. Cela lui permet de se rendre compte que même si cela peut lui sembler injuste, il n’est pas seul.
							De plus, une grande solidarité se forme au fil des séances.
						</p>
					</div>
				</article>
			</div>
		</div>

		<div class="section section-prices">
			<div class="container">
				<article class="prices">
					<ul class="unset prices__table table table--3">
						<li>
							<div class="prices__who table__article">
								<h3 class="article-table__title">Pour qui ?</h3>

								<p>
									Les enfants de primaires uniquement
								</p>
							</div>
						</li>
						<li>
							<div class="prices__who table__article">
								<h3 class="article-table__title">Où ?</h3>

								<p>
									Centre Cap Santé
								</p>
								<p>
									Avenue Albert 1er, 13 <br>
									1342 Limelette
								</p>
							</div>
						</li>
						<li>
							<div class="prices__who table__article">
								<h3 class="article-table__title">Quand ?</h3>

								<p>
									13h30 à 15h00
								</p>

								<p>
									ou 15h00 à 16h30
								</p>
							</div>
						</li>
					</ul>

					<article class="prices__cta">
						<router-link :to="{ name: 'Contact' }">
							<span class="link-cta">
						
								<span class="link-cta__text">Prendre contact</span>
								<CtaArrow class="link-cta__arrow"></CtaArrow>
								<CtaBackground class="link-cta__background">
								</CtaBackground>
							</span>
						</router-link>
					</article>
				</article>
			</div>
		</div>
	</main>
</template>


<!-------------------- STYLE -->
<style scoped>
	.concept-section {
		margin-top: var(--gap);
		background: url(@/assets/img/text/background_concept.svg) no-repeat 50% 10% / 80%;
	}

	@media all and (max-device-width: 750px), (max-width: 750px) {
		.concept-section {
			margin-top: 0;
		}
	}





	/* ---------- PRICES ---------- */

	.prices {

	}

	.prices__cta {
		margin-top: calc(-1 * var(--font-size-main));
		text-align: center;
	}

	@media all and (max-device-width: 850px), (max-width: 850px) {
		.prices__cta {
			margin-top: var(--gap-small);
		}
	}
</style>