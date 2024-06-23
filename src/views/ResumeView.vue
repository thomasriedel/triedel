<template>
  <div class="w-full">
    <h1>
      {{ $t('routes.resume') }}
    </h1>
    <div class="grid grid-cols-1 xl:grid-cols-4 xl:space-x-6">
      <div class="col-left">

        <!-- image card -->
        <div class="card md:!p-0 flex justify-center">
            <img :src="ImageTriedel" alt="Thomas Riedel" class="image-triedel"/>
        </div>

        <!-- base data card -->
        <div class="card sm:col-span-2 xl:col-span-1 md:ml-6 xl:ml-0">
          <ResumeBaseData/>
        </div>

        <div class="card sm:col-span-2 xl:col-span-1 md:ml-6 xl:ml-0">
          <ResumeContactData/>
        </div>

      </div>
      <div class="col-right">
        <div class="card mb-6">
          todo skillset
        </div>
        <div class="card">
          todo werdegang
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageTriedel from "@/assets/images/triedel_wzo_cropped_1.jpg";
import ResumeBaseData from "@/components/resume/ResumeBaseData.vue";
import ResumeContactData from "@/components/resume/ResumeContactData.vue";
</script>
<style scoped>

.col-left {
  @apply col-span-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-1;
}

.col-left > div.card:first-child {
  @apply sm:row-span-2 lg:row-span-1;
}

.col-left > div.card {
  @apply mb-6;
}

.col-right {
  @apply col-span-3;
}

.image-triedel {
  @apply md:scale-110 lg:scale-100 origin-top max-md:rounded-full max-md:shadow-lg max-md:max-w-64 object-cover;
}
</style>