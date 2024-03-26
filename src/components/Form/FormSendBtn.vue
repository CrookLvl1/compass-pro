<template>
    <label class="form-send-btn">
        <button type="submit">{{ placeholder }}</button>
    </label>
</template>

<script setup>
import { defineProps } from 'vue'
//props, emits, etc...
defineProps({
    placeholder: {
        required: true,
        type: String
    }
})

</script>

<style lang="sass" scoped>
@import '@/sass/colors.sass'
.form-send-btn 
    >button
        display: block 
        padding: 0.5rem 1.75rem
        border-radius: 4px
        margin-left: auto
        border: 2px solid $blue
        color: $blue
        font-weight: 800
        cursor: pointer
        &:hover
            opacity: 80%
        &:active
            opacity: 60%
</style>