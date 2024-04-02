<script setup lang="ts">
defineProps({
  title: String,
  text: String,
  src: String,
})
</script>

<template>
  <div>
    <template v-if="src">
      <a
        :href="src"
        target="_blank"
        :title="title"
      >
        <img
          :src="src"
          class="mb-3 transform rounded-md transition-transform duration-500 hover:scale-105"
        />
      </a>
    </template>
    <div>
      <h3
        v-if="title"
        class="text-lg font-semibold text-gray-900"
      >
        {{ title }}
      </h3>
      <p
        v-if="text"
        class="mt-2 text-base font-normal"
      >
        {{ text }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
