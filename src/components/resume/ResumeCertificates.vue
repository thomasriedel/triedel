<template>
  <div class="">
    <h4 class="mb-2">
      {{ $t('resume.certificates.title') }}
    </h4>
    <div class="grid grid-cols-1 gap-4">
      <template v-for="step in Triedel.certificates">
        <div class="card">
          <div class="step-title">
            <div class="step-dates">
              {{ step.year }}
            </div>
            <h5 class="">
              {{ step.title }}
            </h5>
          </div>
          <div v-if="step.institution" class="step-institution">
            <a :href="step.institution.url" target="_blank">
              {{ step.institution.title }}
            </a>
          </div>
          <div v-if="step.subtitle" class="step-subtitle">
            {{ step.subtitle }}
          </div>
          <div v-if="step.finalGrade" class="step-final-grade">
            {{ $t('resume.career.final-grade') }}: {{ step.finalGrade.toFixed(1).replaceAll(".", ",") }}
          </div>
          <div v-if="step.description && step.description.length" class="step-description">
            <span v-if="step.description.length === 1">
              {{ step.description[0] }}
            </span>
            <ul v-else class="list-disc list-inside">
              <li v-for="desc in step.description" :class="!desc ? 'list-none h-3' : ''">
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {Triedel} from "@/constants";
</script>
<style scoped>
.step-title {
  @apply flex flex-col md:flex-row-reverse print:flex-row-reverse justify-between items-center gap-2 md:gap-4 print:gap-4 text-center;
}

.step-title h5,
.step-institution {
  @apply leading-none md:leading-normal print:leading-normal;
}

.step-subtitle,
.step-final-grade {
  @apply my-2;
}

.step-dates {
  @apply inline-block px-3 py-1.5 rounded-lg bg-triedel-text/5 dark:bg-triedel-dark-text/20 w-36;
}

.step-institution {
  @apply font-semibold max-md:text-center print:text-left;
}

.step-description {
  @apply mt-2 opacity-75;
}
</style>