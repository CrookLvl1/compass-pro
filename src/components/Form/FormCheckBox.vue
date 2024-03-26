<template>
    <label class="form-checkbox custom-radio">
        <input v-model="modelValue" type="checkbox" :name="name">
        <span>{{ placeholder }}</span>
        <div class="custom-radio__marker"></div>
    </label>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'
const modelValue = defineModel({ required: true });


defineProps({
    name: {
        required: true,
        type: String
    },
    placeholder: {
        required: true,
        type: String
    }
})
</script>

<style lang="sass" scoped>
    .form-checkbox
        display: flex
        align-items: center
        gap: 0.25rem
</style>