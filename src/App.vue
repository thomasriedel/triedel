<template>
  <AppNavbar/>
  <div class="pt-32 px-6 max-w-content min-h-screen mx-auto flex flex-col">
    <div class="flex-grow flex items-center justify-center pb-16 lg:pt-16 w-full max-w-full mx-auto">
      <RouterView v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </RouterView>
    </div>
    <AppFooter/>
  </div>
</template>
<script setup lang="ts">
import {RouterView, useRouter} from 'vue-router'
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import {Core} from "@/Core";

function onRouteChange(): void {
  setTimeout(() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}), 100);
}

function init(): void {
  useRouter().afterEach(onRouteChange);
  if (Core.userSettingsService.isDarkMode()) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
}

init();
</script>

