<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
		
		
		///// IMPORT COMPONENTS
		import Header from '@/components/base/header/HeaderMain.vue'
		import CtaBackground from '@/components/svg/SVG_CTABackground.vue'
		import CtaArrow from '@/components/svg/SVG_CTAArrow.vue'

		import PresentationPhoto from '@/assets/img/photos/Presentation_Image1.png'
		
		import PresentationPhotoDecoration from '@/assets/img/text/photo_decoration_vertical.svg'

		import PartnersPhotoCapSante from '@/assets/img/logo/partners/capSante.avif'

		import Agenda from '@/composable/COMP_Agenda.vue'
		import Address from '@/composable/COMP_Address.vue'

		import { getMail, getTel, getPartners } from '@/composable/INFOS.js'
		const mail = getMail()
		const tel = getTel()
		const partnersInfos = getPartners()
		const partners = ref(partnersInfos)
		const partnersName = partnersInfos.length <= 1 ? ref('Notre partenaire') : ref('Nos partenaires')
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
						<p>Le but de ce projet est de soulager les familles et surtout de rendre les enfants le plus autonome possible dans leurs devoirs chez eux. Je fonctionne par groupe de 4 enfants maximum durant 1h30. Durant cette plage horaire, nous faisons les devoirs et les leçons du jour et nous essayons d’avancer sur ceux de toute la semaine. Nous fonctionnons aussi en cours individuels durant les congés scolaires (séance d’une heure).</p>
						
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

								<Address></Address>
							</div>
						</li>
						<li>
							<div class="prices__who table__article">
								<h3 class="article-table__title">Quand ?</h3>

								<Agenda></Agenda>
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

		<div class="section section-presentation background background--light">
			<div class="container">
				<article class="presentation">
						<div class="presentation__title title-presentation">
							<h2 class="decorated-title decorated-title--big decorated-title--border-color1-2 decorated-title--onlyborder">
								<span>Qui suis-je ?</span>
							</h2>
						</div>

						<div class="presentation__text text-presentation">
							<p>
								Moi, c’est Marie, j’ai 30 ans et je suis également TDA/H. J’ai créé ce projet afin de venir en aide aux familles pour les devoirs. On sait que c’est souvent une période difficile à gérer avec ces petits loulous qui bougent beaucoup et dont l’attention ne dure pas longtemps.
							</p>

							<p>
								Ce projet a vu le jour en 2018 et est resté actif jusqu'en 2022. Et puis, je suis devenue maman d’un petit garçon a besoin spécifique. Après une petite pause, j’ai décidé de réouvrir le projet pour faire ce qui me passionne.
							</p>

							<p>
								<i>
									Pour toute réservation de séance, merci de vous référer au formulaire présent dans la page de contact. Sinon, n'hésitez pas à me poser vos questions par mail.
								</i>
							</p>
						</div>
						<div class="presentation__photo photo-presentation">
							<img :src="PresentationPhoto" class="photo-presentation__img" alt="Photo de Marie Daneels"/>
							<img :src="PresentationPhotoDecoration" class="photo-presentation__decoration" alt=""/>
						</div>
						<div class="presentation__links links-presentation">

							<ul class="unset links-presentation__list">
								<li>
									<span class="decorated-title decorated-title--small decorated-title--round-color1-3 decorated-title--onlyround">
										<span>
											{{ tel }}
										</span>
									</span>
								</li>

								<li>
									<a :href="`mailto:${mail}`">
										<span class="decorated-title decorated-title--small decorated-title--round-color1-3 decorated-title--onlyround">
											<span>
												{{ mail }}
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
				</article>
			</div>
		</div>
		
		<div class="spacer spacer--small">
			
		</div>

		<div class="section section--partners">
			<div class="container">
				<article class="partners">
					<div class="partners__title">
						<h2 class="concept__title decorated-title decorated-title--big decorated-title--border-color1-2 decorated-title--round-color3">
							<span>
								{{ partnersName }}
							</span>
						</h2>
					</div>

					<div class="partners__list list-partners">
						<ul class="unset list-partners__list">
							<li v-for="partner in partners">
								<a :href="partner.href">
									<img :src="partner.logo" :alt="partner.name" class="list-partners__logo"/>
								</a>
							</li>
						</ul>
					</div>
				</article>
			</div>
		</div>

		<div class="spacer">
			
		</div>
	</main>
</template>


<!-------------------- STYLE -->
<style scoped>





	/* ---------- DECORATED TITLE ---------- */

	a.decorated-title, a .decorated-title {
		font-weight: 400;
		color: var(--nb4);
	}

	a.decorated-title:hover, a:hover .decorated-title {
		color: var(--nb5);
	}





	/* ---------- PRICES ---------- */

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





	/* ---------- PRESENTATION ---------- */

	.presentation {
		max-width: var(--max-width-small-container);
		margin: 2vw auto 1vw;

		display: grid;
		grid-template:
			"title title photo" auto
			"text  text  photo" auto
			"links links links" auto
			/ 1fr 1fr 1fr;
		gap: var(--gap-small);
	}

	.presentation__title {
		grid-area: title;
	}

	.presentation__text {
		grid-area: text;

		padding-right: 5vw;
		position: relative;
		z-index: 40;
	}
	
	.presentation__links {
		grid-area: links;
	}
	
	.presentation__photo {
		display: flex;
		grid-area: photo;
		flex-flow: column wrap;
		justify-content: end;
		align-items: end;
		position: relative;
		overflow: visible;
	}

	.photo-presentation__img {
		position: relative;
		z-index: 40;
	}
	
	.photo-presentation__decoration {
		display: block;
		max-width: unset;
		width: calc(100% + 2 * var(--margin-overflow));
		--margin-overflow: 7vw;
    	transition: var(--global-trans-property) var(--global-trans-time) var(--global-trans-ease);
		
		position: absolute;
		z-index: 10;
		top: 0;
		left: calc(-1 * var(--margin-overflow));
	}

	.links-presentation > * + * {
		margin-top: calc(2 * var(--gutter));
	}

	.links-presentation__list {
		font-weight: 400;
		color: var(--nb4);
	}

	.links-presentation__list {
		display: flex;
		flex-flow: row wrap;
		column-gap: var(--gap);
		row-gap: var(--gutter);
	}
	
	@media all and (max-device-width: 1200px), (max-width: 1200px) {
		.presentation {
			grid-template:
				"title title title" auto
				"text  text  photo" auto
				"links links links" auto
				/ 1fr 1fr 1fr;
		}
		.presentation__photo {
			justify-content: start;
		}
		.presentation__text {
			padding: 0;
		}
	}
	
	@media all and (max-device-width: 750px), (max-width: 750px) {
		.presentation {
			grid-template:
				"title" auto
				"photo" auto
				"text" auto
				"links" auto
				/ 1fr;
		}

		.presentation__photo {
			max-width: calc(300 / 16 * 1rem);
			justify-self: center;
		}
		.presentation__title {
			justify-self: center;
			align-self: center;
		}
	
		.photo-presentation__decoration {
			--margin-overflow: 18vw;
		}
	}
	
	@media all and (max-device-width: 500px), (max-width: 500px) {
		.photo-presentation__decoration {
			opacity: 0;
		}
	}





	/* ---------- PARTNERS ---------- */

	.partners {
		display: flex;
		flex-flow: row wrap;
		column-gap: var(--gap);
		row-gap: var(--gutter);
		justify-content: center;
		align-items: center;

		max-width: var(--max-width-small-container);
		margin: auto;
	}

	/* .partners:after {
		display: block;
		content: '';
		flex: 1 1 auto;
	} */

	.partners__title {
		flex: 0 0 auto;
	}

	.list-partners {
		flex: 1 1 auto;
	}
	
	.list-partners__list {
		display: flex;
		flex-flow: row wrap;
		gap: var(--gutter);
		justify-content: start;
		align-items: center;
	}

	.list-partners__logo {
		max-width: calc(200 / 16 * 1rem);
	}

	@media all and (max-device-width: 600px), (max-width: 600px) {
		.partners {
			flex-flow: column wrap;
		}
	
		.list-partners__list {
			justify-content: center;
		}
	}
</style>