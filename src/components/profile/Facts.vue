<template>
  <div class="flex flex-col">
    <h1>
      {{ $t('profile.facts.title') }}
    </h1>
    <div class="card h-full">
      <table>
        todo
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