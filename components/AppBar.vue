<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()

const navigations = [
  { title: 'Home', name: 'index' },
  { title: 'About', name: 'about' },
  { title: 'Resume', name: 'resume' },
  { title: 'Portfolio', name: 'portfolio' },
]

const drawer = ref(false)

const isCurrentRoute = (value: String) => {
  return route.name === value
}
</script>

<template>
  <div>
    <nav class="container mx-auto">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-shrink-0 items-center">
          <NuxtLink
            :to="{ name: 'index' }"
            title="Home"
          >
            <img
              class="w-8"
              src="/logo.png"
              alt="Logo"
            />
          </NuxtLink>
        </div>
        <div class="hidden sm:-ms-8 sm:block">
          <div class="flex space-x-4">
            <NuxtLink
              v-for="(navigation, index) in navigations"
              :key="index"
              :to="{ name: navigation.name }"
              :title="navigation.title"
              class="group px-3 py-2 transition duration-100"
              :class="[isCurrentRoute(navigation.name) ? 'text-gray-900' : 'text-gray-600']"
            >
              {{ navigation.title }}
              <span
                class="mx-auto block h-0.5 max-w-0 bg-gray-900 transition-all duration-500"
                :class="[isCurrentRoute(navigation.name) ? 'max-w-full' : '']"
              ></span>
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="block sm:hidden"
            @click="drawer = true"
          >
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <Transition
      enter-active-class="ease-in-out duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in-out duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="drawer"
        class="fixed inset-0 z-10 bg-gray-500 bg-opacity-75"
        @click="drawer = false"
      ></div>
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-500 ease-out"
      enter-from-class="transform -translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-500 ease-out"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform -translate-x-full"
    >
      <aside
        v-show="drawer"
        class="fixed inset-0 z-10 h-screen w-screen sm:max-w-sm"
      >
        <div class="flex h-full flex-col bg-white pb-3 shadow-xl">
          <div class="flex h-16 items-center justify-between px-4">
            <NuxtLink
              :to="{ name: 'index' }"
              title="Home"
            >
              <img
                class="w-8"
                src="/logo.png"
                alt="Logo"
              />
            </NuxtLink>
            <button
              type="button"
              class="relative rounded-md text-gray-600 hover:text-gray-900"
              @click="drawer = false"
            >
              <span class="absolute -inset-2.5"></span>
              <span class="sr-only">Close panel</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="overflow-y-auto px-4 sm:px-6">
            <ul class="space-y-2 font-medium">
              <li
                v-for="(navigation, index) in navigations"
                :key="index"
              >
                <NuxtLink
                  :to="{ name: navigation.name }"
                  :title="navigation.title"
                  class="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                  :class="[isCurrentRoute(navigation.name) ? 'bg-gray-100 text-gray-900' : '']"
                  @click="drawer = false"
                >
                  {{ navigation.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </Transition>
  </div>
</template>
