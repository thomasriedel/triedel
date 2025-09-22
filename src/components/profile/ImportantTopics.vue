<template>
  <div class="flex flex-col">
    <h1>
      {{ $t('profile.important-topics.title') }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
      <template v-for="topic in Triedel.importantTopics" :key="`topic_${topic}`">
        <div class="card text-center">
          <h5>
            {{ $t(`personal-data.important-topics.${topic}`) }}
          </h5>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
import {DateUtils} from "@/utils";
</script>