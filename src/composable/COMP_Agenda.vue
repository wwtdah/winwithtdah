<script setup>
    import { getAgenda } from '@/composable/INFOS.js'
    const agenda = getAgenda()
</script>

<template>
    <div v-for="(value, key, index) in agenda" class="agenda">
        <p class="agenda__title">{{ value.day }}</p>
        
        <p>
            <div v-for="(hour, key) in value.hour" class="agenda__hour">
                - {{ hour.start }} à {{ hour.end }}<br>
            </div>
        </p>
        
    </div>
</template>

<style scoped>

    .agenda p {
        margin: 0;
    }

    .agenda p + p {
        margin-top: var(--gutter);
    }

    .agenda__title {
        font-weight: 450;
    }

    .agenda__hour:last-child br {
        display: none;
    }
</style>