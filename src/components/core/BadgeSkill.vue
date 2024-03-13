<script setup>
import Icon from '@/components/core/Icon.vue'

defineProps({
  icon: String,
  text: String,
})
</script>

<template>
  <span class="inline-flex items-center rounded bg-zinc-600 px-3 py-1 text-xs font-medium text-zinc-100">
    <template v-if="icon">
      <Icon
        :name="icon"
        class="me-1.5 h-5"
      />
    </template>
    {{ text }}
  </span>
</template>
