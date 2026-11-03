<script setup>
    import { getMail, getTel } from '@/composable/INFOS.js'
		const mail = getMail()
		const tel = getTel()
</script>

<template>
    <ul class="unset contact-list">
        <li>
            <a :href="`mailto:${mail}`">
                <span class="decorated-title decorated-title--small decorated-title--round-color1-3 decorated-title--onlyround">
                    <span>
                        {{ mail }}
                    </span>
                </span>
            </a>
        </li>
        
        <li>
            <span class="decorated-title decorated-title--small decorated-title--round-color1-3 decorated-title--onlyround">
                <span>
                    {{ tel }}
                </span>
            </span>
        </li>
    </ul>
</template>

<style scoped>
	.contact-list {
		font-weight: 400;
		color: var(--nb4);
		
		display: flex;
		flex-flow: row wrap;
		column-gap: var(--gap);
		row-gap: var(--gutter);
	}
</style>