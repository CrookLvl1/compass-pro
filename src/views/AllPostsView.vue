<template>
    <section class="all-posts-wrapper">
        <h1>Все новости</h1>
        <transition name="fade" mode="out-in">
            <div class="posts-wrapper" v-if="posts.length > 0">
                <TransitionGroup tag="ol" class="posts" mode="out-in" name="list-transition">
                    <li class="posts__post" v-for="post in posts" :key="post.id" :data-postId="post.id">
                        <PostComp @post-deleted="postDeletedHandler" :post="post" />
                    </li>
                </TransitionGroup>
            </div>

            <LoadingComp size="60px" v-else-if="postsLoading" />
            <p v-else>Вы удалили все посты >:(</p>
        </transition>
    </section>
</template>

<script setup>
import { defineAsyncComponent, inject, computed } from "vue";
import PostComp from "@/components/PostComp.vue";

const LoadingComp = defineAsyncComponent(() => import('@/components/ui/LoadingComp.vue'));

//injected values from App.vue
const posts = computed(() => inject('posts'));
const postDeletedHandler = inject('post-deleted-handler');
const postsLoading = computed(() => inject('posts-loading'));


</script>

<style lang="sass" scoped>
@import '@/sass/mixins.sass'
@import '@/sass/colors.sass'
@import '@/sass/transitions.sass'
.all-posts-wrapper
    padding: 2rem
    display: flex
    flex-direction: column
    gap: 1.5rem
    position: relative

.posts-wrapper
    background-color: #FFFFFF
    border-radius: 4px
        
.posts
    display: flex
    flex-direction: column
    gap: 20px
    counter-reset: item
    list-style-type: none
    padding: 2rem
    


    &__post
        display: block
        position: relative
        &::before 
            content: counter(item)
            counter-increment: item
            position: absolute
            font-size: 3rem
            color: $gray


        &::after
            @include underline
</style>
