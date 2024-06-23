<template>

  <div class="facts-grid grid grid-cols-3">
    <div>
      {{ $t('resume.contact-data.address') }}
    </div>
    <div class="!mb-0">
      {{ Triedel.street }}
    </div>
    <div></div>
    <div>
      {{ Triedel.zipCode }} {{ Triedel.city }}
    </div>
    <div class="md:col-span-full">
      {{ $t('personal-data.email') }}
    </div>
    <div class="md:col-span-full sm:text-right">
      <a :href="`mailto:${Triedel.email}`" target="_blank" class="underline">
        {{ Triedel.email }}
      </a>
    </div>
    <div>
      {{ $t('personal-data.mobile') }}
    </div>
    <div>
      <a :href="`tel:${Triedel.mobile.replaceAll(' ', '')}`" target="_blank" class="underline">
        {{ Triedel.mobile }}
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
import {DateUtils} from "@/utils";
</script>