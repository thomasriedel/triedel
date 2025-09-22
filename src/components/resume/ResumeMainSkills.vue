<template>
  <div class="">
    <h4 class="mb-2">
      {{ $t('resume.main-skills.title') }}
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <template v-for="skill in Triedel.mainSkills" :key="`main_skill_${skill.short}`">
        <div class="card skill-card" :title="`${skill.name}: ${$t(`resume.skillset.strength.${skill.strength}`)}`">
          <div class="skill-icon">
            <Component v-if="skill.icon" :is="skill.icon" />
            <h4 v-else>
              {{ skill.short }}
            </h4>
          </div>
<!--          <div class="skill-strength">-->
<!--            <ScaleDots :max="5" :value="skill.strength"/>-->
<!--          </div>-->
          <div class="skill-title">
            {{ skill.name }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {Triedel} from "@/constants";
import ScaleDots from "@/components/ScaleDots.vue";
</script>
<style scoped>

.skill-icon {
  @apply text-center uppercase h-10 flex items-center justify-center mb-3;
}

.skill-icon svg {
  @apply w-10 h-10;
}

.skill-strength {
  @apply mb-2;
}

.skill-title {
  @apply whitespace-nowrap overflow-ellipsis overflow-hidden text-center;
}

</style>