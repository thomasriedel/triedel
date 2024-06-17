<template>
  <div class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6 max-lg:space-y-10 mb-10">
      <BaseData/>
      <ContactData/>
    </div>
    <div class="">
      <EitherOr />
    </div>
  </div>
</template>
<script lang="ts" setup>

import BaseData from "@/components/profile/BaseData.vue";
import ContactData from "@/components/profile/Facts.vue";
import EitherOr from "@/components/profile/EitherOr.vue";
</script>