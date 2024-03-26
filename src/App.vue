<template>
  <div class="app-wrapper">
    <AsideMenu class="aside-menu" />

    <div class="page-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" :key="Component && Component.type.__name" />
        </transition>
      </router-view>
    </div>

  </div>
</template>
<script setup>
import AsideMenu from '@/components/AsideMenu.vue'
import { provide, reactive, ref } from 'vue';


//initial
const posts = reactive([]);
const postsLoading = ref(false)

//handlers
const postDeletedHandler = (id) => {
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex < 0) return;

  posts.splice(postIndex, 1);
}


//IIFE
setTimeout(async () => {
  postsLoading.value = true;
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/', { method: 'get' });
  const data = await response.json();
  data.forEach((post) => posts.push(post));
  postsLoading.value = false;
}, 1000)


//proviving variables
provide('posts', posts);
provide('post-deleted-handler', postDeletedHandler)
provide('posts-loading', postsLoading)
</script>

<style lang="sass">
@import "@/sass/transitions.sass"

#app 
  .aside-menu
    width: 20%
    height: 100dvh
    height: 100svh

body 
  background-color: rgba(0, 128, 128, .05)

.page-wrapper 
  padding-left: 20%
  min-height: 100dvh
  min-height: 100svh
  width: 100%


</style>
