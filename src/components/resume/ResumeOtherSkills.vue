<template>
  <div class="">
    <h4 class="mb-2">
      {{ $t('resume.other-skills.title') }}
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <template v-for="skill in Triedel.otherSkills" :key="`other_skill_${skill.short}`">
        <div class="card skill-card" :title="`${skill.name}`">
<!--          <div class="skill-icon">-->
<!--            <Component v-if="skill.icon" :is="skill.icon" />-->
<!--            <h5 v-else>-->
<!--              {{ skill.short }}-->
<!--            </h5>-->
<!--          </div>-->
<!--          <div class="skill-strength">-->
<!--            <ScaleDots :max="5" :value="skill.strength"/>-->
<!--          </div>-->
          <div class="skill-title">
            {{ skill.name }}
          </div>
          <div class="skill-strength">
            <!--            <ScaleDots :max="5" :value="skill.strength"/>-->
            {{ skill.yearsOfExperience }} {{ $t('misc.year', { count: skill.yearsOfExperience }) }}
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

.card {
  @apply flex items-center gap-4 py-3;
}

.skill-icon {
  @apply text-center uppercase h-8 flex items-center justify-center;
}

.skill-icon svg {
  @apply w-6 h-6;
}

.skill-strength {
  @apply text-sm grow text-right opacity-50 whitespace-nowrap;
}

.skill-title {
  @apply whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-sm;
}

</style>