<template>
    <button class="delete-button" :class="`delete-button-${uniqueId}`" @click="clickHanlder">
        {{ label }}
    </button>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'

//props, emits, etc...
const emit = defineEmits(['confirmed-event'])
const props = defineProps({
    uniqueId: {
        required: true
    }
});

//initial
const label = ref('Удалить');
const counter = ref(0);


//functions
const reset = () => {
    counter.value = 0;
    label.value = 'Удалить';
}


//handlers
const clickHanlder = (ev) => {
    ev.stopPropagation();

    switch (counter.value) {
        case 0: {
            counter.value++
            label.value = 'Вы уверены?'

            document.addEventListener('click', (ev) => {
                if (ev.target.closest(`delete-button-${props.uniqueId}`)) return;
                reset()
            }, { 'once': true });

            break;
        }
        case 1: {
            emit('confirmed-event')
            reset()
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