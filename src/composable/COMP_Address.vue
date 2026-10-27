<script setup>
    import { getAddress } from '@/composable/INFOS.js'
    const address = getAddress()
</script>

<template>
    <div v-for="(address, key) in address" class="address">
        <p class="address__title">{{ address.title }}</p>
        
        <p>
            {{ address.line1 }} <br>
            {{ address.line2 }}
        </p>
        
    </div>
</template>

<style scoped>

    .address p {
        margin: 0;
    }

    .address p + p {
        margin-top: var(--gutter);
    }

    .address__title {
        font-weight: 450;
    }

    .address--footer .address__title {
        font-weight: inherit;
        font-style: italic;
    }
</style>