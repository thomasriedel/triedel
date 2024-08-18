<template>
  <div class="">
    <h4 class="mb-2">
      {{ $t('resume.career.title') }}
    </h4>
    <div class="grid grid-cols-1 gap-4">
      <template v-for="step in Triedel.career">
        <div class="career-step card">
          <div class="step-title">
            <div class="step-dates">
              <template v-if="step.ongoing">
                {{ $t('resume.career.ongoing-from') }}
              </template>
              {{ step.start }}
              <template v-if="step.end">
                - {{ step.end }}
              </template>
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
          <div v-if="step.description" class="step-description">
            {{ step.description }}
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
  @apply flex flex-col md:flex-row-reverse justify-between items-center gap-2 md:gap-4 text-center;
}

.step-title h5,
.step-institution {
  @apply leading-none md:leading-normal;
}

.step-subtitle,
.step-final-grade {
  @apply my-2;
}

.step-dates {
  @apply inline-block px-3 py-1.5 rounded-lg bg-triedel-text/5 dark:bg-triedel-dark-text/20 w-36;
}

.step-institution {
  @apply font-semibold max-md:text-center;
}

.step-description {
  @apply opacity-50;
}
</style>