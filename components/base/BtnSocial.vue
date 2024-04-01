<script setup lang="ts">
defineProps({
  href: String,
  icon: String,
})
</script>

<template>
  <a :href="href">
    <span class="btn-social relative inline-flex items-center justify-center p-3 text-center text-base font-medium">
      <BaseIcon
        :name="icon"
        class="w-6"
      />
    </span>
  </a>
</template>

<style scoped>
.btn-social::before {
  position: absolute;
  content: '';
  inset: 0;
  opacity: 0;
  border-radius: 0.5rem;
  background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  transition: opacity 0.3s ease-in-out;
}

.btn-social:hover::before {
  opacity: 1;
}

.btn-social img {
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-social:hover img {
  filter: brightness(0) invert(1);
}
</style>
