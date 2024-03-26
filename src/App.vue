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
