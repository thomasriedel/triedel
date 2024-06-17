<template>
  <div class="social-container">
    <template v-for="social in Triedel.socials" :key="`social_${social.name}`">
      <a :href="social.url" target="_blank">
        <div class="card social-card">
          <component :is="social.icon"/>
          {{ social.name }}
        </div>
      </a>
    </template>
    <a :href="`mailto:${Triedel.email}`" target="_blank">
      <div class="card social-card">
        <IconGmail />
        {{ $t('socials.email') }}
      </div>
    </a>
  </div>
</template>
<script lang="ts" setup>
import {Triedel} from "@/constants";
import {IconGmail} from "@/assets/icons/fill";
</script>
<style scoped>
.social-container {
  @apply grid grid-cols-1 sm:grid-cols-3 sm:-ml-2 sm:-mr-2 max-sm:w-full;
}

.social-card {
  @apply pb-4 mb-4 sm:mb-0 sm:mx-2 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg;
}

.social-card svg {
  @apply w-8 h-8 mb-2;
}
</style>