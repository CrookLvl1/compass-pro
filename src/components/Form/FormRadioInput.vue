<template>
    <label class="form-radio-input">
        <h3>{{ placeholder }}</h3>
        <ul class="radio-list">
            <li v-for="item in items" :key="item.value">
                <label class="custom-radio">
                    <input v-model="modelValue" type="radio" :name="name" :value="item.value">
                    <span>{{ item.label }}</span>
                    <div class="custom-radio__marker"></div>
                </label>
            </li>
        </ul>
    </label>
</template>
<script setup>
import { defineProps, defineModel } from 'vue'

//props, emits, etc...
const modelValue = defineModel({ required: true });

defineProps({
    name: {
        required: true,
        type: String
    },
    placeholder: {
        required: true,
        type: String
    },
    items: {
        required: true,
        type: Array,
    }
})

</script>
<style lang="sass">
    .radio-list
        display: flex
        gap: 1rem
        padding: 0.5rem 0
            
        

</style>