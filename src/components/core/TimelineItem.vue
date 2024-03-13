<script setup>
defineProps({
  time: String,
  title: String,
  subtitle: String,
  text: String,
})
</script>

<template>
  <li class="mb-7 ms-4">
    <div class="absolute -start-[0.4rem] mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400"></div>
    <time
      v-if="time"
      class="mb-1 text-sm font-normal leading-none text-gray-400"
    >
      {{ time }}
    </time>
    <h3
      v-if="title"
      class="text-lg font-semibold text-gray-900"
    >
      {{ title }}
    </h3>
    <h4
      v-if="subtitle"
      class="text-md font-normal italic text-gray-800"
    >
      {{ subtitle }}
    </h4>
    <p
      v-if="text"
      class="mt-3 text-base font-normal"
    >
      {{ text }}
    </p>
    <slot></slot>
  </li>
</template>
