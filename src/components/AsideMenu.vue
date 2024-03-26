<template>
    <aside class="aside-menu-wrapper">
        <div class="user-card">
            <div class="user-card__image">
                <img v-if="imgSrc" :src="imgSrc" alt="" />
                <LoadingComp v-else />
            </div>
            <div class="user-card__info">
                <h2 class="user-card__header">Ирина</h2>
                <p class="user-card__email">test@email.com</p>
            </div>
        </div>
        <nav class="navigation">
            <ul class="navigation__list">
                <li class="navigation__element">
                    <router-link class="link" to="/">
                        <div class="link__img">
                            <img src="@/assets/home.svg" alt="home">
                        </div>
                        <p class="link__desc">
                            Все новости
                        </p>
                    </router-link>
                </li>
                <li class="navigation__element">
                    <router-link class="navigation__element link" to="/create">
                        <div class="link__img">
                            <img src="@/assets/pen.svg" alt="pen">
                        </div>
                        <p class="link__desc">
                            Добавить запись
                        </p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
const LoadingComp = defineAsyncComponent(() => import('@/components/ui/LoadingComp.vue'));


const imgSrc = ref(null);

fetch("https://picsum.photos/64", { method: "get" })
    .then((data) => data.url)
    .then((data) => (imgSrc.value = data));
</script>

<style lang="sass" scoped>
@import "@/sass/colors.sass"
@import "@/sass/mixins.sass"

.aside-menu-wrapper
    display: flex
    flex-direction: column
    position: fixed
    background-color: #ffffff
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .2)
    width: 100%

.user-card
    width: 100%
    display: flex
    padding: 1rem
    gap: 0.75rem
    position: relative
    &::after
        @include underline

    &__image
        position: relative
        overflow: hidden
        border-radius: 50%
        width: 64px
        height: 64px
        >img
            object-fit: cover
    &__header
        font-size: 1.5rem
        color: #263d51 
        font-weight: 500
    &__email
        font-size: 1rem
        color: gray


.navigation
    &__list
        display: flex
        flex-direction: column

    &__element
        display: block
        position: relative
        &::after 
            @include underline

        &:last-child
            &::after
                display: none

        .router-link-active
            .link
                &__img
                    >img
                        @include svgBlue

                &__desc
                    color: $blue
                


        .link
            display: flex
            padding: 1rem
            gap: 1.5rem
            align-items: center
            width: 100%
            height: 100%
            transition: background 200ms ease-in-out
            &:hover
                background: rgba(0, 0, 0, .15)

            &__img
                width: 32px
                height: 32px
                >img
                    width: 100%
                    height: 100%
                    transition: filter 200ms ease-in-out

            &__desc
                font-size: 1.25rem
                font-weight: 500
                transition: color 200ms ease-in-out
        


</style>
