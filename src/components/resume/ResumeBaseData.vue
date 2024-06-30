<template>

  <div class="facts-grid grid grid-cols-3">
    <div>
      {{ $t('resume.base-data.name') }}
    </div>
    <div>
      {{ Triedel.firstname }} {{ Triedel.lastname }}
    </div>
    <div>
      {{ $t('profile.base-data.birthday') }}
    </div>
    <div>
      {{ DateUtils.formatDate(Triedel.birthday) }}
    </div>
    <div>
      {{ $t('profile.base-data.birthplace') }}
    </div>
    <div>
      {{ Triedel.birthplace }}
    </div>
    <div>
      {{ $t('personal-data.nationality') }}
    </div>
    <div>
      {{ $t('personal-data.nationalities.german') }}
    </div>
    <template v-for="(lang, i) in Triedel.languages" :key="`resume_lang_${lang.language}`">
      <div>
        <span v-if="i === 0">
          {{ $t('personal-data.languages.label') }}
        </span>
      </div>
      <div class="mb-2 leading-none">
        {{ $t(`personal-data.languages.languages.${lang.language}`) }}
        ({{ $t(`personal-data.languages.levels.${lang.level}`) }})
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import {Triedel} from "@/constants";
import {DateUtils} from "@/utils";
</script>