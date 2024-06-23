<template>
  <div class="greeting-container">
    <div class="greeting mobile-card">
      <h2 class="max-lg:text-xl max-lg:text-center">
        {{ $t('home-view.greeting') }}
      </h2>
      <h1 class="text-5xl lg:text-7xl px-6 max-lg:text-center">
        Thomas
      </h1>
      <div class="">
        <h5 class="text-right">
          <template v-for="(iAm, i) of whatIAm" :key="`i_am_${iAm}`">
            <transition name="slide-fade-vertical">
              <div v-if="i === whatIAmCounter" class="what-i-am">
                {{ $t(`home-view.what-i-am.${iAm}`) }}
              </div>
            </transition>
          </template>
        </h5>
      </div>
    </div>
    <div class="max-lg:-mb-12">
      <img :src="ImageTriedel" alt="Thomas Riedel" class="image-triedel"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ImageTriedel from '@/assets/images/triedel_wzo_cropped_1.jpg';
import {ref} from "vue";

const whatIAm: string[] = [
  'squash-player',
  'cat-father',
  'cyclist',
  'darts-player',
  'hobby-chef',
  'wdy-gp-champ',
  'rocket-league-champ',
  'full-stack-developer',
  'ux-professional',
  'software-developer',
]

const countWait = 600;
const whatIAmCounter = ref(0);

function countThrough(): void {
  setTimeout(() => {
    whatIAmCounter.value += 1;
    if (whatIAmCounter.value < whatIAm.length - 1) countThrough();
  }, Math.max(countWait / whatIAm.length * whatIAmCounter.value, 200));
}

function init(): void {
  countThrough();
}

init();
</script>
<style scoped>
.greeting-container {
  @apply flex flex-col-reverse lg:flex-row items-center lg:space-x-8;
}

.greeting {
  @apply h-full w-full -mt-8 relative pb-14 lg:pb-0 overflow-visible;
}

.image-triedel {
  @apply max-lg:w-80 max-w-full lg:max-w-[320px] rounded-full shadow-xl;
}

.what-i-am {
  @apply absolute max-lg:left-0 right-0 bottom-6 lg:bottom-auto lg:top-full max-lg:text-center;
}
</style>