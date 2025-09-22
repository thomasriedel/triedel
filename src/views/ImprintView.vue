<template>
  <div class="w-full">
    <h1 class="mb-6">
      {{ $t('imprint.title') }}
    </h1>
    <h5 class="mb-4">
      {{ $t('imprint.information-according') }} § 5 TMG
    </h5>
    <p>
      {{ Triedel.firstname }} {{ Triedel.lastname }}<br>
      {{ Triedel.street }}<br>
      {{ Triedel.zipCode }} {{ Triedel.city }}<br>
    </p>
    <table class="mb-4">
      <tr>
        <td>
          {{ $t('personal-data.email') }}:
        </td>
        <td>
          <a :href="`mailto:${Triedel.email}`" class="underline">{{ Triedel.email }}</a>
        </td>
      </tr>
<!--      <tr>-->
<!--        <td>-->
<!--          {{ $t('personal-data.mobile') }}:-->
<!--        </td>-->
<!--        <td>-->
<!--          <a :href="`tel:${Triedel.mobile.replaceAll(' ', '')}`" class="underline">{{ Triedel.mobile }}</a>-->
<!--        </td>-->
<!--      </tr>-->
    </table>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
</script>
<style scoped>
table tr td {
  @apply pr-4;
}
</style>