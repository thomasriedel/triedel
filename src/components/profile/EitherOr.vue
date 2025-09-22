<template>
  <div class="">
    <h1>
      {{ $t('profile.either-or.title') }}
    </h1>

    <!-- professional -->
    <div class="card mb-3">
      <table>
        <tr>
          <td>
            {{ $t('profile.either-or.professional.frontend-backend.frontend') }}
          </td>
          <td>
            <Scale :value="0.3"/>
          </td>
          <td>
            {{ $t('profile.either-or.professional.frontend-backend.backend') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.professional.frontend-languages.js') }}
          </td>
          <td>
            <Scale :value="0.9"/>
          </td>
          <td>
            {{ $t('profile.either-or.professional.frontend-languages.ts') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.professional.css-frameworks.tailwind') }}
          </td>
          <td>
            <Scale :value="0.2"/>
          </td>
          <td>
            {{ $t('profile.either-or.professional.css-frameworks.bootstrap') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.professional.backend-languages.java') }}
          </td>
          <td>
            <Scale :value="0.6"/>
          </td>
          <td>
            {{ $t('profile.either-or.professional.backend-languages.go') }}
          </td>
        </tr>
      </table>
    </div>

    <!-- fun -->
    <div class="card">
      <table>
        <tr>
          <td>
            {{ $t('profile.either-or.fun.early-late.early') }}
          </td>
          <td>
            <Scale :value="0.3"/>
          </td>
          <td>
            {{ $t('profile.either-or.fun.early-late.late') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.fun.food.pizza') }}
          </td>
          <td>
            <Scale :value="0.4"/>
          </td>
          <td>
            {{ $t('profile.either-or.fun.food.pasta') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.fun.tea-coffee.coffee') }}
          </td>
          <td>
            <Scale :value="1"/>
          </td>
          <td>
            {{ $t('profile.either-or.fun.tea-coffee.tea') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.fun.gaming.pc') }}
          </td>
          <td>
            <Scale :value="0.5"/>
          </td>
          <td>
            {{ $t('profile.either-or.fun.gaming.console') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.fun.vacation.beach') }}
          </td>
          <td>
            <Scale :value="0.3"/>
          </td>
          <td>
            {{ $t('profile.either-or.fun.vacation.mountains') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('profile.either-or.fun.evening.game-night') }}
          </td>
          <td>
            <Scale :value="0.1"/>
          </td>
          <td>
            {{ $t('profile.either-or.fun.evening.party') }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script lang="ts" setup>

import Scale from "@/components/Scale.vue";
</script>
<style scoped>

table {
  @apply w-full;
}

table tr {
  @apply w-full;
}
table tr td {
  @apply whitespace-nowrap;
}

table tr:not(:last-child) td {
  @apply pb-2;
}

table tr td:nth-child(2) {
  @apply w-8/12 px-1 sm:px-4;
}

table tr td:last-child {
  @apply text-right;
}

table tr td:first-child,
table tr td:last-child {
  @apply w-2/12;
}
</style>