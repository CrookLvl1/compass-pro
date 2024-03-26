<template>
    <div class="loading-wrapper">
        <div class="loading"
            :style="color && { borderTopColor: color, borderLeftColor: color } || size && { width: size, height: size, 'border-top-width': size / 6, ' border-left-width': size / 6 }">

        </div>
    </div>
</template>
<style lang="sass">
@keyframes loading
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

.loading-wrapper
    height: 100%
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    .loading
        border: 6px solid transparent
        border-top: 6px solid gray
        border-left: 6px solid gray
        border-radius: 50%
        width: 30px
        height: 30px
        animation: loading 1s linear infinite

</style>
<script setup>
import { defineProps } from 'vue'
defineProps({
    size: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: false
    }
})
</script>