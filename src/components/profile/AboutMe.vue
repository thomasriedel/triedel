<template>
  <div class="flex flex-col">
    <h1>
      {{ $t('profile.about-me.title') }}
    </h1>
    <div class="card h-full">
      <div class="facts-grid grid grid-cols-2">
          <div>
            {{ $t('profile.about-me.fav-tech-stack.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-tech-stack.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-club.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-club.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-transport.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-transport.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.job-wish.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.job-wish.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-food.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-food.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-drink.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-drink.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.pet.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.pet.value') }}
          </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
import {DateUtils} from "@/utils";
</script>
<style scoped>

.facts-grid > div {
  @apply sm:even:text-right max-sm:col-span-2 odd:max-sm:font-bold odd:max-sm:mb-1 even:max-sm:mb-4 max-sm:leading-none;
}

.facts-grid > div:last-child {
  @apply mb-0;
}

</style>