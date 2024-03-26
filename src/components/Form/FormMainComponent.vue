<template>
    <form @submit.prevent="formSubmit" class="form-main-component">
        <FormTextInput v-model="form.name" :name="'name'" :placeholder="'Ваше имя'" :inputType="'text'" />
        <FormTextInput v-model="form.email" :name="'email'" :placeholder="'Email'" :inputType="'email'" />
        <FormRadioInput v-model="form.gender" :name="'gender'" :placeholder="'Пол'" :items="genderItems" />
        <FormTextArea v-model="form.message" :name="'message'" :placeholder="'Сообщение'" />
        <FormCheckBox v-model="form.agree" :name="'agree'" :placeholder="'Согласен(на) на обработку персональных данных'" />
        <FormSendBtn :placeholder="'Отправить'" />
    </form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
import FormTextInput from '@/components/Form/FormTextInput.vue';
import FormRadioInput from '@/components/Form/FormRadioInput.vue';
import FormSendBtn from '@/components/Form/FormSendBtn.vue';
import FormTextArea from '@/components/Form/FormTextArea.vue';
import FormCheckBox from '@/components/Form/FormCheckBox.vue';

const emit = defineEmits(['form-sent'])

const genderItems = [{
    label: 'Мужской',
    value: 'male'
}, {
    label: 'Женский',
    value: 'female'
}]

const form = reactive({
    name: '',
    email: '',
    gender: genderItems[0].value,
    message: '',
    agree: false
})


const formSubmit = () => {
    emit('form-sent', {...form})
    form.name = '';
    form.email = '';
    form.gender = '';
    form.message = '';
    form.agree = false;
}

</script>

<style lang="sass">
@import '@/sass/colors.sass'
.form-main-component 
    display: flex 
    flex-direction: column
    padding: 1.5rem
    background: #ffffff
    border: 4px
    gap: 1rem

    >label
        width: 100%
        height: 100%
        position: relative
        >input[type=text], >input[type=email], >textarea
            border-radius: 8px
            padding: 0.75rem
            border: 2px solid lightgray
            width: 100%
            font-size: 0.85rem
            &:focus
                border-color: $blue



.custom-radio
    position: relative
    display: flex
    align-items: center
    cursor: pointer

    > span
        padding-left: 30px

    &__marker
        position: absolute
        display: flex
        align-items: center
        justify-content: center
        width: 20px
        height: 20px
        border: 2px solid gray
        border-radius: 4px
        &::after
            // display: block
            opacity: 0%
            content: ''
            width: 12px
            height: 12px
            background: $blue
            border-radius: 2px


    input
        display: none
        &:checked
            ~ .custom-radio__marker
                border-color: $blue
                &::after
                    opacity: 100%
            

</style>