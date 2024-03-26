<template>
    <label class="form-input-text">
        <input v-model="modelValue" :type="inputType" :placeholder="placeholder">
    </label>
</template>

<script setup>
import { defineProps, defineModel } from 'vue';

//props, emits, etc...
const modelValue = defineModel({ required: true })

defineProps({
    placeholder: {
        type: String,
        required: true,
    },
    inputType: {
        type: String,
        required: true,
    }
})
</script>