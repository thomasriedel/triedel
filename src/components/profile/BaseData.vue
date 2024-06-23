<template>
  <div class="flex flex-col">
    <h1>
      {{ $t('profile.base-data.title') }}
    </h1>
    <div class="card h-full">
      <div class="facts-grid grid grid-cols-3">
          <div>
            {{ $t('profile.base-data.firstname') }}
          </div>
          <div>
            {{ Triedel.firstname }}
          </div>
          <div>
            {{ $t('profile.base-data.lastname') }}
          </div>
          <div>
            {{ Triedel.lastname }}
          </div>
          <div>
            {{ $t('profile.base-data.birthday') }}
          </div>
          <div>
            {{ DateUtils.formatDate(Triedel.birthday) }}
          </div>
          <div>
            {{ $t('profile.base-data.birthplace') }}
          </div>
          <div>
            {{ Triedel.birthplace }}
          </div>
          <div>
            {{ $t('profile.base-data.email') }}
          </div>
          <div>
            <a :href="`mailto:${Triedel.email}`" target="_blank" class="underline">
              <span class="sm:hidden">
                Gmail
              </span>
              <span class="max-sm:hidden">
                {{ Triedel.email }}
              </span>
            </a>
          </div>
        <template v-for="(social, i) in Triedel.socials" :key="`social_${social.name}`">
            <div>
            <span v-if="i === 0">
              {{ $t('profile.base-data.socials') }}
            </span>
            </div>
            <div class="!mb-0">
              <a :href="social.url" target="_blank" class="underline">
                {{ social.name }}
              </a>
            </div>
        </template>
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
  @apply even:col-span-2 sm:even:text-right max-sm:col-span-2 odd:max-sm:font-bold odd:max-sm:mb-1 even:max-sm:mb-4 max-sm:leading-none;
}

.facts-grid > div:last-child {
  @apply mb-0;
}

</style>