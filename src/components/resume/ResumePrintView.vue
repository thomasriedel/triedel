<template>
  <teleport to="body">
    <div class="resume-print-view print">
      <div class="content">
        <div class="left-col">
          <img :src="ImageTriedel" alt="Thomas Riedel" class="image-triedel"/>

          <span class="spacer"></span>

          <div class="w-full">
            <h4 class="mb-3">
              {{ $t('resume.print.personal-data') }}
            </h4>
            <ResumeBaseData class="w-full"/>
          </div>

          <span class="spacer"></span>

          <div class="w-full">
            <h4 class="mb-3">
              {{ $t('resume.print.contact') }}
            </h4>
            <ResumeContactData class="w-full"/>
          </div>

          <span class="spacer"></span>

          <div class="w-full">
            <div class="flex items-center justify-between mb-3">
              <h4>
                {{ $t('resume.print.tech-stack.title') }}
              </h4>
              <span class="subtitle pt-2">
                {{ $t('resume.print.tech-stack.subtitle') }}
              </span>
            </div>
            <ul class="tech-stack">
              <template v-for="skill in Triedel.mainSkills" :key="`resume_print_main_skill_${skill.name}`">
                <li>
                  <div>
                    <Component v-if="skill.icon" :is="skill.icon"/>
                    <h4 v-else>
                      {{ skill.short }}
                    </h4>
                    <div class="skill-content">
                      <span>
                        {{ skill.name }}
                      </span>
                      <span>
                        {{ skill.yearsOfExperience }} {{ $t('misc.year', {count: skill.yearsOfExperience}) }}
                      </span>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </div>

          <span class="spacer"></span>

          <div class="w-full">
            <div class="flex items-center justify-between mb-3">
              <h4>
                {{ $t('resume.print.more-skills.title') }}
              </h4>
              <span class="subtitle pt-2">
                {{ $t('resume.print.more-skills.subtitle') }}
              </span>
            </div>
            <ul class="tech-stack">
              <template v-for="skill in Triedel.otherSkills" :key="`resume_print_other_skill_${skill.name}`">
                <li>
                  <div>
                    <Component v-if="skill.icon" :is="skill.icon"/>
                    <span v-else class="font-bold text-lg">
                      {{ skill.short }}
                    </span>
                    <div class="skill-content">
                      <span>
                        {{ skill.name }}
                      </span>
                      <span>
                        {{ skill.yearsOfExperience }} {{ $t('misc.year', {count: skill.yearsOfExperience}) }}
                      </span>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </div>

        </div>
        <div class="right-col">
          <div class="header">
            <h1 class="mb-2">
              {{ Triedel.firstname }} {{ Triedel.lastname }}
            </h1>
            <h4>
              {{ $t('resume.print.software-developer') }}
            </h4>
          </div>

          <span class="spacer"></span>

          <div class="grid grid-cols-1 gap-6">
            <ResumeCareer class="w-full"/>
            <ResumeCertificates class="w-full"/>
          </div>

        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import ImageTriedel from "@/assets/images/triedel_wzo_cropped_1.jpg";
import ResumeBaseData from "@/components/resume/ResumeBaseData.vue";
import ResumeContactData from "@/components/resume/ResumeContactData.vue";
import {Triedel} from "@/constants";
import ResumeCareer from "@/components/resume/ResumeCareer.vue";
import ResumeCertificates from "@/components/resume/ResumeCertificates.vue";
</script>
<style scoped>
.resume-print-view {
  @apply flex flex-col w-full h-full;

  .content {
    @apply flex w-full flex-grow;

    .left-col {
      @apply p-12 pb-[4.5rem];
      @apply w-2/5 h-full bg-triedel-gradient-0;
      @apply flex flex-col gap-6 items-center;

      .image-triedel {
        @apply rounded-xl w-full;
      }

      .tech-stack {
        li > div {
          @apply flex items-center gap-2 pb-2;

          svg {
            @apply w-6 h-6;
          }

          .skill-content {
            @apply grow flex items-center justify-between gap-2;

            span:last-child {
              @apply opacity-75;
            }
          }
        }
      }
    }

    .right-col {
      @apply p-12;
      @apply flex-grow flex flex-col gap-8 items-center;

      .header {
        @apply w-full text-center;
      }

      .summary {
        @apply w-full list-inside list-disc;

        li {
          @apply text-lg;
        }
      }
    }

    .spacer {
      @apply w-full border-b border-black/30;
    }
  }
}
</style>