<script>
    var isColored = false;
    export function changeIsColored(newIsColored) {
        isColored = newIsColored;
    }
</script>

<!-------------------- SCRIPT VARIABLES -->
<script setup>
		import {ref} from 'vue'
        const colorClass = isColored ? ref('mainnav--color') : ref('');
</script>



<!-------------------- HTML TEMPLATE -->
<template>
    <nav>
        <ul class="unset mainnav" :class="colorClass">
            <li>
                <router-link to="/" class="mainnav__link home"><span class="mainnav__text">Accueil</span></router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Contact' }" class="mainnav__link contact"><span class="mainnav__text">Contact</span></router-link>
            </li>
        </ul>
    </nav>
</template>


<!-------------------- STYLE -->
<style scoped>



    /* ----- NAV */

    nav {
        position: absolute;
        z-index: 1000;
        top: 0;
        width: 100%;
    }

    .mainnav {
        display: flex;
        flex-flow: row wrap;
        justify-content: end;
        align-items: center;
        gap: var(--gap-small);

        padding: calc(0.7 * var(--gap-small)) var(--gap-small);
    }

    .mainnav:before {
        display: block;
        content: '';
        width: var(--sq);
        height: var(--sq);
        --sq: calc(40 / 16 * 1rem);
        background: url(@/assets/img/logo/logo_small.png) 50% 50% / cover;
    }

    .mainnav > * {
        margin: 0;
    }



    /* ----- LINKS */

    .mainnav__link {
        position: relative;
        font-weight: 400;
        color: var(--color);
        --font-size: var(--font-size-main);
    }

    .mainnav--color .mainnav__link {
        --color: var(--nb0);
    }

    .mainnav__text {
        position: relative;
        z-index: 10;
    }

    a.router-link-active {
        --color: var(--nb3);
    }

    a.router-link-active:before {
        --padd-top: calc(2 / 16 * 1rem);
        --padd-side: calc(30 / 16 * 1rem);

        display: block;
        content: '';
        width: calc(100% + var(--padd-side));
        height: var(--height);
        --height: calc(80 / 16 * 1rem);
        
        background-image: url(@/assets/img/text/text_background_button_small.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        
        position: absolute;
        top: calc(0.5 * var(--font-size) + var(--padd-top) - 0.5 * var(--height));
        left: calc(-0.5 * var(--padd-side));
        
        z-index: 1;
    }
    
    .mainnav--color a.router-link-active:before {
        background-image: url(@/assets/img/text/text_background_button_small_2.svg);
    }

    a:not(.router-link-active):hover {
        color: var(--color3);
    }

    .mainnav--color a:not(.router-link-active):hover {
        color: var(--color1-4);
    }
</style>