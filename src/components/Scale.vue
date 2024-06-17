<template>
  <div class="">
    <div class="scale-container">
      <span class="line"/>
      <span class="marker" :style="`left: ${calculatedLeft}%;`"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {nextTick, onMounted, ref} from "vue";

interface Props {
  value: number;
  scale?: Map<number, number | string>;
}

const props = defineProps<Props>();

const calculatedLeft = ref<number>(50);

onMounted(() => {
  nextTick(() => {
    calculatedLeft.value = props.value * 100;
  });
});
</script>
<style scoped>
.scale-container {
  @apply flex items-center relative h-4;
}

.line {
  @apply h-0.5 bg-triedel-text dark:bg-triedel-dark-text rounded-full absolute left-0 right-0 top-1/2 transform -translate-y-1/2;
}

.marker {
  @apply h-4 w-4 bg-triedel-text dark:bg-triedel-dark-text rounded-full absolute duration-1000 ease-in-out transform -translate-x-1/2;
}
</style>