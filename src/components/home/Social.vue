<template>
  <div class="social-container">
    <template v-for="social in Triedel.social" :key="`social_${social.name}`">
      <a :href="social.url" target="_blank">
        <div class="social-card">
          <component :is="social.icon"/>
          {{ social.name }}
        </div>
      </a>
    </template>
  </div>
</template>
<script lang="ts" setup>
import {Triedel} from "@/constants";
</script>
<style scoped>
.social-container {
  @apply grid grid-cols-2 -ml-2 -mr-2;
}

.social-card {
  @apply rounded-xl p-6 pb-4 mx-2;
  @apply flex flex-col items-center justify-center;
  @apply bg-triedel-gradient-0/50 duration-150 shadow-md hover:shadow-lg cursor-pointer;
}

.social-card svg {
  @apply w-8 h-8 mb-2;
}
</style>