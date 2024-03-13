<script setup>
defineProps({
  name: String,
  href: String,
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
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
