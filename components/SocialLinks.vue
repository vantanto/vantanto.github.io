<script setup lang="ts">
const items = [
  { title: 'GitHub', link: 'https://github.com/vantanto', icon: 'github' },
  { title: 'Facebook', link: 'https://facebook.com/vantanto.99', icon: 'facebook' },
  { title: 'Instagram', link: 'https://instagram.com/vantanto', icon: 'instagram' },
  { title: 'X', link: 'https://x.com/vantanto', icon: 'x' },
]
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-1">
    <BaseBtnSocial
      v-for="(item, index) in items"
      :key="index"
      :href="item.link"
      :icon="item.icon"
      :title="item.title"
    />
  </div>
</template>
