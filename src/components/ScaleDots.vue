<template>
  <div class="">
    <div class="scale-dots-container">
      <template v-for="i in max">
        <div class="scale-dot" :class="{ 'filled': i <= value }"></div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>

interface Props {
  value: number;
  max: number;
}

const props = defineProps<Props>();

</script>
<style scoped>
.scale-dots-container {
  @apply w-full flex items-center justify-center space-x-1;
}

.scale-dot {
  @apply border border-current rounded-full w-2 h-2;
}

.scale-dot.filled {
  @apply bg-current;
}
</style>