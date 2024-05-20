<template>
  <AppNavbar/>
  <div class="py-32 px-6 max-w-[1400px] min-h-screen mx-auto flex items-center justify-center">
    <RouterView v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>
  <AppFooter/>
</template>
<script setup lang="ts">
import {RouterView, useRouter} from 'vue-router'
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";

function onRouteChange(): void {
  setTimeout(() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}), 100);
}

function init(): void {
  useRouter().afterEach(onRouteChange);
}

init();
</script>

