<template>
    <button class="delete-button" :class="`delete-button-${uniqueId}`" @click="clickHanlder">
        {{ label }}
    </button>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['confirmed-event'])
const props = defineProps({
    uniqueId: {
        required: true
    }
});

const label = ref('Удалить');

const counter = ref(0);
const reset = () => {
    counter.value = 0;
    label.value = 'Удалить';
}
const clickHanlder = (ev) => {
    ev.stopPropagation();

    switch (counter.value) {
        case 0: {
            counter.value++
            label.value = 'Вы уверены?'

            document.addEventListener('click', (ev) => {
                if (ev.target.closest(`delete-button-${props.uniqueId}`)) return;
                reset()
            }, { 'once': true, capture: true });

            break;
        }
        case 1: {
            reset()
            emit('confirmed-event')
            break;
        }
        default: {
            return;
        }
    }
}

</script>

<style lang="sass" scoped>
button.delete-button
    cursor: pointer
    color: lightcoral
    font-size: 1rem
    width: 100%
    height: 100%
</style>