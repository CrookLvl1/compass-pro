<template>
    <section class="info-wrapper">
        <ul class="info-list">
            <li class="info-list__element element" v-for="value, key in item" :key="key">
                <div class="element__key">{{ key }}:</div>
                <div class="element__value">{{ value }}</div>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    item: {required: true}
})
</script>

<style lang="sass" scoped>
@import '@/sass/colors.sass'
.info-list 
    display: flex 
    flex-direction: column
    padding: 1.5rem
    height: 100%
    background: #ffffff
    border: 4px
    gap: 1rem
    display: flex
    border: 2px solid $blue
    &__element
        max-width: 100%
        overflow: hidden

.element
    display: flex
    gap: 2rem
    &__key
        color: gray
        width: 70px
        text-align: start
    &__value
        text-overflow: wrap
        text-wrap: wrap
        word-wrap: break-word
        word-break: break-all
        font-weight: 600

</style>