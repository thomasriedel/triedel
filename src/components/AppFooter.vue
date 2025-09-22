<template>
  <div class="app-footer">

    <div class="navigation">
      <template v-for="route in routes" :key="`footer_route_${route.name}`">
        <router-link :to="{ name: route.name }">
          <div
              class="navigation-link"
              :class="{ active: route.name === currentRoute.name }"
          >
            {{ $t(`routes.${route.name as string}`) }}
          </div>
        </router-link>
      </template>
      <a :href="`mailto:${Triedel.email}`" target="_blank">
        {{ $t('footer.contact') }}
      </a>
    </div>

  </div>
</template>
<script lang="ts" setup>
import {type RouteLocationNormalized, useRouter} from "vue-router";
import {computed} from "vue";
import {Triedel} from "@/constants";

const router = useRouter();
const routes = router.getRoutes().filter((r) => r.meta.footer);

const currentRoute = computed<RouteLocationNormalized>(() => router.currentRoute.value);
</script>
<style scoped>
.app-footer {
  @apply px-6 max-w-content mx-auto py-12 flex items-center justify-center;
}

.app-footer .navigation {
  @apply flex max-sm:flex-col gap-x-12 gap-y-4 items-center;
}

.app-footer .navigation-link.active {
  @apply font-semibold;
}
</style>