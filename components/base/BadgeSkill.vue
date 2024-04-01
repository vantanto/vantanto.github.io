<script setup lang="ts">
defineProps({
  icon: String,
  text: String,
})
</script>

<template>
  <span class="inline-flex items-center rounded bg-zinc-600 px-3 py-1 text-xs font-medium text-zinc-100">
    <template v-if="icon">
      <BaseIcon
        :name="icon"
        class="me-1.5 h-5"
      />
    </template>
    {{ text }}
  </span>
</template>
