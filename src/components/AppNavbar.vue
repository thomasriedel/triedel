<template>
  <div class="app-navbar">

    <div class="lg:w-1/3">
      <router-link to="/">
        <div class="inline-block backdrop-blur py-1 px-3 -mt-1 -ml-3 rounded-full">
          <h5 class="font-bold whitespace-nowrap inline">
            Thomas Riedel
          </h5>
        </div>
      </router-link>
    </div>

    <div class="navigation-container" :class="mobileNavVisible ? 'nav-visible' : ''">
      <div class="navigation" @change="reloadActiveElement">
        <template v-for="route in routes" :key="`navbar_route_${route.name}`">
          <router-link :to="{ name: route.name }" @click="mobileNavVisible = false">
            <div
                class="navigation-link"
                :class="{ active: route.name === currentRoute.name }"
            >
              <component v-if="route.meta.icon" :is="route.meta.icon"/>
              {{ $t(`routes.${route.name as string}`) }}
            </div>
          </router-link>
        </template>
        <div class="navigation-link lg:!hidden" @click="toggleDarkMode">
          <IconLightbulb v-if="!isDarkMode" class="w-5 h-5"/>
          <IconLightbulbFlash v-else class="w-5 h-5"/>
          <span v-if="isDarkMode">
            {{ $t('user-settings.dark-mode.disable') }}
          </span>
          <span v-else>
            {{ $t('user-settings.dark-mode.enable') }}
          </span>
        </div>
        <div v-if="activeElement" class="active-bg" :style="activeLinkBgStyle"></div>
      </div>
    </div>

    <div class="lg:w-1/3 flex justify-end">
      <button class="btn-icon hidden lg:block" @click="toggleDarkMode">
        <IconLightbulb v-if="!isDarkMode" class="w-5 h-5"/>
        <IconLightbulbFlash v-else class="w-5 h-5"/>
      </button>
      <button
          class="btn-icon-filled menu-button lg:hidden"
          @click="mobileNavVisible = !mobileNavVisible"
      >
        <IconMenu v-if="!mobileNavVisible" class="w-5 h-5"/>
        <IconArrowRight v-else class="w-5 h-5"/>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {type RouteLocationNormalized, useRouter} from "vue-router";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {IconArrowRight, IconLightbulb, IconLightbulbFlash, IconMenu} from '@/assets/icons/outline';
import {Core} from "@/Core";

const router = useRouter();
const routes = router.getRoutes().filter((r) => r.meta.navbar);

const currentRoute = computed<RouteLocationNormalized>(() => router.currentRoute.value);

const activeElement = ref<Element | null>(null);
const activeLinkBgStyle = ref('');

const mobileNavVisible = ref(false);
const isDarkMode = ref(Core.userSettingsService.isDarkMode());

function toggleDarkMode(): void {
  Core.userSettingsService.setDarkMode(!isDarkMode.value);
  isDarkMode.value = Core.userSettingsService.isDarkMode();
}

function calculateActiveLinkBgStyle(): void {
  if (!activeElement.value) return;

  const ae = activeElement.value as HTMLElement;
  activeLinkBgStyle.value = `left: ${ae.offsetLeft}px; top: ${ae.offsetTop}px; width: ${ae.offsetWidth}px; height: ${ae.offsetHeight}px;`;
}

function reloadActiveElement(): void {
  nextTick(() => {
    activeElement.value = getActiveElement();
    calculateActiveLinkBgStyle();
  });
}

function getActiveElement(): Element | null {
  return document.querySelector('.app-navbar .navigation .navigation-link.active');
}

// Observe resize caused by font loading/rendering
function observeNavigationResize(): void {
  const observer = new ResizeObserver(() => {
    activeElement.value = null;
    calculateActiveLinkBgStyle();
    reloadActiveElement();
  });
  const navigation = document.querySelector('.app-navbar .navigation') as HTMLElement;
  if (!navigation) return;
  observer.observe(navigation);
}

onMounted(observeNavigationResize);

function init(): void {
  watch(currentRoute, reloadActiveElement);
}

init();
</script>
<style scoped>
.app-navbar {
  @apply fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[100vw] flex items-center justify-between h-24 lg:h-32 z-30 px-6 max-w-[1400px];
}

.app-navbar .navigation-container {
  @apply px-6 -mt-5 lg:mt-0 duration-200;
  @apply absolute top-full left-full;
  @apply lg:relative lg:top-auto lg:left-auto;
}

.app-navbar .navigation-container.nav-visible {
  @apply transform -translate-x-full lg:translate-x-0;
}

.app-navbar .navigation {
  @apply rounded-3xl lg:rounded-full p-1.5 shadow-md relative flex flex-col lg:flex-row backdrop-blur bg-white/40 dark:bg-black/40;
}

.app-navbar .navigation .navigation-link {
  @apply whitespace-nowrap px-5 py-2 select-none cursor-pointer rounded-full relative z-10 inline-flex justify-center items-center w-full lg:w-auto;
}

.app-navbar .navigation .navigation-link svg {
  @apply w-4 h-4 -mt-px mr-1.5;
}

.app-navbar .navigation .active-bg {
  @apply absolute top-0 bottom-0 rounded-full duration-100 pointer-events-none bg-triedel-text/5 dark:bg-triedel-dark-text/5;
}

.settings-button svg {
  @apply duration-200;
}

.settings-button:hover svg {
  @apply transform rotate-90;
}
</style>