<template>
  <div class="">
    <h1 class="mb-4">
      {{ $t('icons-view.title') }}
    </h1>
    <table>
      <tr>
        <td class="pr-4">
          {{ $t('icons-view.creator') }}:
        </td>
        <td>
          <template v-for="creator in creators" :key="`icons_creator_${creator.name}`">
            <a :href="creator.url" target="_blank" class="mr-2 underline">
              {{ creator.name }}
            </a>
          </template>
        </td>
      </tr>
      <tr>
        <td class="pr-4">
          {{ $t('icons-view.icon-pack') }}:
        </td>
        <td>
          <a :href="iconPack.url" target="_blank" class="underline">
            {{ iconPack.name }}
          </a>
        </td>
      </tr>
      <tr>
        <td class="pr-4">
          {{ $t('icons-view.license') }}:
        </td>
        <td>
          <a :href="license.url" target="_blank" class="underline">
            {{ license.name }}
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
interface LinkedResource {
  name: string;
  url: string;
}

const creators: LinkedResource[] = [
  {
    name: '480 Design',
    url: 'https://www.figma.com/@480design',
  },
  {
    name: 'R4IN80W',
    url: 'https://www.figma.com/@voidrainbow',
  },
];

const iconPack: LinkedResource = {
  name: 'Solar Icons Set',
  url: 'https://www.figma.com/community/file/1166831539721848736/solar-icons-set',
};

const license: LinkedResource = {
  name: 'CC BY 4.0 License',
  url: 'https://creativecommons.org/licenses/by/4.0/',
};
</script>