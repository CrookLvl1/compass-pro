<template>
    <div class="post-wrapper">
        <div class="post">
            <h2 class="post__title" :class="{ 'post__title-active': showContent }">
                {{ post.title }}
                <label class="post__open-label">
                    <input type="checkbox" v-model="showContent">
                </label>
            </h2>
            <p class="post__author-id">Id автора: {{ post.userId }}</p>
            <p class="post__body" v-show="showContent">
                {{ post.body }}
            </p>
            <div class="post__delete-btn">
                <LoadingComp v-if="requestSent" />

                <DeleteButton v-else @confirmed-event="deletePost" :uniqueId="post.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, defineAsyncComponent } from 'vue';
import DeleteButton from '@/components/ui/DeleteButton.vue'
const LoadingComp = defineAsyncComponent(() => import('@/components/ui/LoadingComp.vue'));


//props, emits, etc.
const props = defineProps({
    post: {
        required: true,
    },
})
const emit = defineEmits(['post-deleted']);


//initial
const showContent = ref(false);
const requestSent = ref(false);


//functions
const deletePost = async () => {
    requestSent.value = true;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, { method: 'delete' })
    console.log(response)
    if (response.status === 200) {
        emit('post-deleted', props.post.id)
    }
    requestSent.value = false
}

</script>

<style lang="sass" scoped>
@import '@/sass/colors.sass'

.post 
    padding: 1rem
    padding-left: 5rem
    display: flex
    flex-direction: column
    gap: 0.5rem
    position: relative

    &__title
        position: relative
        font-size: 1.75rem
        font-weight: 600
        &-active
            color: $blue

    &__open-label
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        cursor: pointer
        >input
            display: none
    &__author-id
        color: gray

    &__body 
        padding-top: 2rem

    &__delete-btn
        position: absolute
        width: 120px
        height: 50px
        display: flex
        justify-content: center
        align-items: center
        top: 0
        right: 0

        border-radius: 12px
        transition: background-color 150ms ease-in-out
        font-weight: 500
        &:hover
            background: rgba(255, 0, 0, .15)

</style>