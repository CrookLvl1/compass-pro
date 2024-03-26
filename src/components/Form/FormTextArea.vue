<template>
    <label class="form-text-area">
        <textarea v-model="modelValue" :name="name" :placeholder="placeholder"></textarea>
        <div class="counter">Символов: {{ modelValue.length}}</div>
    </label>
</template>

<script setup>
import { defineProps, defineModel } from 'vue';

const modelValue = defineModel({ required: true })

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
    .form-text-area 
        position: relative
        >textarea
            resize: none
            height: 150px
        .counter
            position: absolute
            top: -1.5rem
            right: 0
            color: gray
            font-size: 0.75rem
</style>