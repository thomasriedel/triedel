<template>
  <div class="flex flex-col">
    <h1>
      {{ $t('profile.about-me.title') }}
    </h1>
    <div class="card h-full">
      <div class="facts-grid">
          <div>
            {{ $t('profile.about-me.fav-tech-stack.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-tech-stack.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-club.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-club.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-game.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-game.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.job-wish.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.job-wish.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-food.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-food.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-drink.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.fav-drink.value') }}
          </div>
          <div>
            {{ $t('profile.about-me.pet.label') }}
          </div>
          <div>
            {{ $t('profile.about-me.pet.value') }}
          </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
import {DateUtils} from "@/utils";
</script>