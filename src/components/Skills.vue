<script setup>
import BadgeSkill from './core/BadgeSkill.vue'

const items = [
  { text: 'PHP', icon: 'php' },
  { text: 'JavaScript', icon: 'javascript' },
  { text: 'C#', icon: 'csharp' },
  { text: 'Java', icon: 'java' },
  { text: 'Kotlin', icon: 'kotlin' },
  {},
  { text: 'Laravel', icon: 'laravel' },
  { text: 'Vue.js', icon: 'vuedotjs' },
  { text: 'Ionic', icon: 'ionic' },
  { text: 'Framework7', icon: 'framework7' },
  {},
  { text: 'MySQL', icon: 'mysql' },
  { text: 'Microsoft SQL Server', icon: 'microsoftsqlserver' },
]
</script>

<template>
  <div class="flex flex-wrap justify-center gap-x-2 gap-y-1.5 md:justify-start">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <BadgeSkill
        v-if="item.text"
        :icon="item.icon"
        :text="item.text"
      />
      <div
        v-else
        class="basis-full"
      ></div>
    </template>
  </div>
</template>
