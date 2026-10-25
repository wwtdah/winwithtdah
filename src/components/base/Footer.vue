<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
		import BorderSVG from '@/components/svg/SVG_BorderMiddle.vue'
        import DecorationSVG from '@/assets/img/text/footer_decoration.svg'
        import SeparatorSVG from '@/assets/img/text/footer_separator.svg'
</script>



<!-------------------- HTML TEMPLATE -->
<template>
    
    <footer>
        <div class="section section-footer background background--dark">
			<BorderSVG class="footer__border large-border large-border--top"/>
            <div class="container">
                <article class="footer">
                    <div class="footer__email footer__maintext">
                        <a href="mailto:winwithtdah@gmail.com">
                            <span class="decorated-title decorated-title--small decorated-title--borderleft decorated-title--border-color1-3 decorated-title--onlyborder">
                                <span>
                                    winwithtdah@gmail.com
                                </span>
                            </span>
                        </a>
                    </div>

                    <div class="footer__address footer__maintext">
                        <p>
                            <b>Adresse</b>
                        </p>
                        <p>
                            <i>Centre Cap Santé</i> <br>
                            Avenue Albert 1er, 13 <br>
                            1342 Limelette
                        </p>
                    </div>

                    <div class="footer__calendar footer__maintext">
                        <p>
                            <b>Heures</b>
                        </p>
                        <p>
                            <i>Les mercredis</i> <br>
                            13h30 à 15h<br>
                            ou 15h à 16h30
                        </p>
                    </div>

                    <div class="footer__links links-footer footer__maintext">
                        <ul class="unset links-footer__list">
                            <li>
                                <router-link to="/">
                                    <span class="decorated-title decorated-title--small decorated-title--round-color2-2 decorated-title--onlyround">
                                        <span>
                                            Accueil
                                        </span>
                                    </span>
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'Contact' }">
                                    <span class="decorated-title decorated-title--small decorated-title--round-color3-2 decorated-title--onlyround">
                                        <span>
                                            Contact
                                        </span>
                                    </span>
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__separator separator-footer">
                        <img :src="SeparatorSVG" class="separator-footer__img"/>
                    </div>

                    <div class="footer__separator2 separator2-footer">
			            <BorderSVG class="footer__border large-border large-border--top"/>
                    </div>

                    <div class="footer__credits credits-footer">
                        &copy; Webdesign @Emily-Yu Sayez
                    </div>
                </article>
            </div>
        </div>
    </footer>
</template>


<!-------------------- STYLE -->
<style scoped>





	/* ---------- DECORATED TITLE ---------- */

    a.decorated-title, a .decorated-title {
        font-weight: 450;
    }





	/* ---------- FOOTER LAYOUT ---------- */
    .section-footer {
        position: relative;
        padding: var(--section-padding) 0;
        overflow: hidden;

        --section-padding: calc(1.12 * var(--global-margin-height));
        --container-padding: var(--global-margin-width);
    }

    .section-footer .container {
        padding: 0 var(--container-padding);
    }

    .footer {
        display: grid;
        grid-template:
            "email   email    separator . . ." auto
            ".       .        separator . . links" var(--padd1)
            "address calendar separator . . links" auto
            / 2fr 2fr var(--separator) var(--padd2) var(--padd2) 1fr;
        --separator: 4vw;
        --padd1: calc(0.5 * var(--gap-small));
        --padd2: var(--gap-small);
        gap: var(--gutter);

        color: var(--color-main);
        --color-main: var(--nb0);
    }

    .footer__maintext {
        position: relative;
        z-index: 40;
    }

	.footer__border.large-border--top {
		--color: var(--nb0);
	}

    .footer__email {
        grid-area: email;
    }

    .footer__separator {
        grid-area: separator;
        position: relative;

        user-select: none;
    }

    .footer__separator2 {
        display: none;
        grid-area: separator2;
        position: relative;
    }

        .footer__separator2 svg {
            width: 100%;
            min-width: unset;
            left: 0;
            opacity: .25;
        }


    .separator-footer__img {
        display: block;
        max-width: unset;
        height: calc(100% + 2 * var(--section-padding) + var(--padd));
        --padd: calc(40 / 16 * 1rem);

        position: absolute;
        bottom: calc(-1 * var(--section-padding) - 0.5 * var(--padd));
        right: 0;
    }

    .footer__links {
        grid-area: links;
    }

    .footer__address {
        grid-area: address;
    }

    .footer__calendar {
        grid-area: calendar;
    }

    .footer p + p {
        margin: var(--gutter) 0 0;
    }

    .links-footer__list {
        display: flex;
        flex-flow: column wrap;
        justify-content: start;
        align-items: start;
        gap: var(--gap-small);
    }

    .footer__credits {
        position: absolute;
        bottom: var(--gutter);
        opacity: 0.4;
    }

    @media all and (max-device-width: 1200px), (max-width: 1200px) {
        .footer {
            --padd2: 0;
        }

        .footer__separator {
            opacity: .25;
        }
    }

    @media all and (max-device-width: 750px), (max-width: 750px) {
        .footer {
            grid-template:
                "email email" auto
                ".     ." var(--padd2)
                "links links" auto
                ".     ." var(--padd3)
                "separator2 separator2" auto
                ".     ." var(--padd3)
                "address calendar" auto
                ". ." var(--padd1)
                / 1fr 1fr;
            --padd3: calc(1.5 * var(--gutter));
        }

        .footer__separator2 {
            display: block;
        }
        .links-footer__list {
            flex-flow: row wrap;
        }

        .footer__separator {
            display: none;
        }
    }
    
    @media all and (max-device-width: 750px), (max-width: 750px) {
        .footer {
            grid-template:
                "email email" auto
                ".     ." var(--padd2)
                "links links" auto
                ".     ." var(--padd3)
                "separator2 separator2" auto
                ".     ." var(--padd3)
                "address address" auto
                ".     ." var(--padd3)
                "calendar calendar" auto
                ". ." var(--padd1)
                / 1fr 1fr;
            --padd3: calc(1.5 * var(--gutter));
        }
    }
</style>