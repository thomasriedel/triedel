<template>
  <div class="flex flex-col">
    <h1>
      {{ $t('profile.base-data.title') }}
    </h1>
    <div class="card h-full">
      <table>
        <tr>
          <td>
            {{ $t('profile.base-data.firstname') }}
          </td>
          <td>
            {{ Triedel.firstname }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.base-data.lastname') }}
          </td>
          <td>
            {{ Triedel.lastname }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.base-data.birthday') }}
          </td>
          <td>
            {{ DateUtils.formatDate(Triedel.birthday) }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.base-data.birthplace') }}
          </td>
          <td>
            {{ Triedel.birthplace }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.base-data.email') }}
          </td>
          <td>
            <a :href="`mailto:${Triedel.email}`" target="_blank" class="underline">
              <span class="sm:hidden">
                Gmail
              </span>
              <span class="max-sm:hidden">
                {{ Triedel.email }}
              </span>
            </a>
          </td>
        </tr>
        <template v-for="(social, i) in Triedel.socials" :key="`social_${social.name}`">
          <tr>
            <td>
            <span v-if="i === 0">
              {{ $t('profile.base-data.socials') }}
            </span>
            </td>
            <td>
              <a :href="social.url" target="_blank" class="underline">
                {{ social.name }}
              </a>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
import {DateUtils} from "@/utils";
</script>
<style scoped>

table {
  @apply w-full;
}

table tr td:first-child {
  @apply pr-4 md:pr-8 lg:pr-16;
}

table tr td:last-child {
  @apply text-right;
}

</style>