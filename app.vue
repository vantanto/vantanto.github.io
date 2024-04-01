<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'VanTanto',
  meta: [{ name: 'description', content: "I'm a software engineer in Indonesia" }],
  bodyAttrs: {
    class: () => `body-${route.name?.toString()}`,
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
