<template>
  <div>
    <div class="color-row">
      <div class="label">
        {{ $t('colors-view.colors.text') }}:
      </div>
      <div class="color bg-triedel-text"></div>
    </div>
    <div class="color-row">
      <div class="label">
        {{ $t('colors-view.colors.accent') }}:
      </div>
      <div class="color bg-triedel-accent"></div>
    </div>
    <div class="color-row">
      <div class="label">
        {{ $t('colors-view.colors.gradient-0') }}:
      </div>
      <div class="color bg-triedel-gradient-0"></div>
    </div>
    <div class="color-row">
      <div class="label">
        {{ $t('colors-view.colors.gradient-1') }}:
      </div>
      <div class="color bg-triedel-gradient-1"></div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.color-row {
  @apply flex items-center space-x-4 mb-2;
}

.color-row .label {
  @apply w-32 whitespace-nowrap overflow-hidden overflow-ellipsis;
}

.color-row .color {
  @apply h-8 w-16 rounded shadow;
}
</style>