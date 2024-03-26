<template>
    <div class="create-post-wrapper">
        <h1>Добавить запись</h1>
        <section class="sections">
            <FormMainComponent class="sections__form" @form-sent="formSentHandler" />
            <transition name="fade" mode="out-in">
                <InfoComp class="sections__info" :style="{ 'visibility': data ? '' : 'hidden' }" :item="data"
                    :key="data" />
            </transition>
        </section>
    </div>
</template>

<script setup>
import FormMainComponent from '@/components/Form/FormMainComponent.vue'
import InfoComp from '@/components/InfoComp.vue';
import { shallowRef } from 'vue';

//initial
let data = shallowRef(null);


//handlers
const formSentHandler = (eventData) => data.value = eventData;
</script>

<style lang="sass" scoped>
@import '@/sass/transitions.sass'
.create-post-wrapper
    padding: 2rem
    display: flex
    flex-direction: column
    gap: 1.5rem
    position: relative

.sections
    display: flex
    gap: 4rem
    >*
        width: 50%



</style>