<script setup lang="ts">
defineProps({
  name: String,
  href: String,
  title: String,
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :title="title"
  >
    <img
      :src="`/assets/icon/${name}.svg`"
      class="h-5"
    />
  </a>
  <img
    v-else
    :src="`/assets/icon/${name}.svg`"
    class="h-5"
  />
</template>
