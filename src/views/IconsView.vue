<template>
  <div class="w-full">
    <h1 class="mb-4">
      {{ $t('icons-view.title') }}
    </h1>
    <table>
      <template v-for="iconPack in iconPacks" :key="`icon_pack_${iconPack.icons.name}`">
        <tr>
          <td class="pr-4">
            {{ $t('icons-view.icon-pack') }}:
          </td>
          <td class="font-bold">
            <a :href="iconPack.icons.url" target="_blank" class="underline">
              {{ iconPack.icons.name }}
            </a>
          </td>
        </tr>
        <tr>
          <td class="pr-4">
            {{ $t('icons-view.creator') }}:
          </td>
          <td>
            <template v-for="creator in iconPack.creators" :key="`${iconPack.icons.name}_creator_${creator.name}`">
              <a :href="creator.url" target="_blank" class="mr-2 underline">
                {{ creator.name }}
              </a>
            </template>
          </td>
        </tr>
        <tr>
          <td class="pr-4">
            {{ $t('icons-view.license') }}:
          </td>
          <td>
            <a :href="iconPack.license.url" target="_blank" class="underline">
              {{ iconPack.license.name }}
            </a>
          </td>
        </tr>
        <tr class="h-4"></tr>
      </template>
    </table>
  </div>
</template>
<script setup lang="ts">
interface IconPack {
  icons: LinkedResource;
  creators: LinkedResource[];
  license: LinkedResource;
}

interface LinkedResource {
  name: string;
  url: string;
}

const iconPacks: IconPack[] = [
  {
    icons: {
      name: 'Solar Icons Set',
      url: 'https://www.figma.com/community/file/1166831539721848736/solar-icons-set',
    },
    creators: [
      {
        name: '480 Design',
        url: 'https://www.figma.com/@480design',
      },
      {
        name: 'R4IN80W',
        url: 'https://www.figma.com/@voidrainbow',
      },
    ],
    license: {
      name: 'CC BY 4.0 License',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    }
  },
  {
    icons: {
      name: 'Simple Icons',
      url: 'https://github.com/simple-icons/simple-icons',
    },
    creators: [
      {
        name: '680+',
        url: 'https://github.com/simple-icons/simple-icons/graphs/contributors',
      },
    ],
    license: {
      name: 'CC0 1.0 License',
      url: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md',
    }
  },
]
</script>