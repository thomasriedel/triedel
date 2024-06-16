<template>
  <div class="flex flex-col items-center lg:pt-24">
    <Greeting class="mb-8 lg:mb-12"/>

    <div class="card whitespace-pre-line max-w-3xl mb-8">
      {{ $t('home-view.introduction') }}
      <img :src="ImageSignature" alt="Thomas" class="image-signature dark:invert dark:opacity-90"/>
    </div>

    <Socials/>
  </div>
</template>
<script setup lang="ts">
import Greeting from "@/components/home/Greeting.vue";
import Socials from "@/components/home/Socials.vue";
import ImageSignature from "@/assets/images/signature.png";
</script>
<style scoped>
.image-signature {
  @apply max-w-64 -mb-4 mt-4 ml-auto;
}
</style>