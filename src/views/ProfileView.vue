<template>
  <div class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 max-lg:gap-y-10 mb-10">
      <BaseData/>
      <AboutMe/>
      <ImportantTopics class="col-span-full"/>
    </div>
    <div class="">
      <EitherOr/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BaseData from "@/components/profile/BaseData.vue";
import EitherOr from "@/components/profile/EitherOr.vue";
import AboutMe from "@/components/profile/AboutMe.vue";
import ImportantTopics from "@/components/profile/ImportantTopics.vue";
</script>