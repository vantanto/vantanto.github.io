<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'VanTanto',
  meta: [
    { name: 'description', content: "I'm a software engineer in Indonesia" },
    { name: 'google-site-verification', content: 'zgzimCFlUXGYZd8legiYK4R2hN7Tx_42ZW6OLPvnCdY' },
  ],
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
