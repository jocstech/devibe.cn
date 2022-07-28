<template>
  <header class="bg-indigo-700 text-white">
    <nav class="px-2 py-3">
      <ul class="flex justify-center gap-3 capitalize">
        <li
          class="hover:text-blue-200 cursor-pointer"
          v-for="nav of navs"
          :key="nav.text"
        >
          <nuxt-link :to="nav.to">{{ nav.text }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navs = ref([
  {
    to: '/',
    text: 'home',
  },
  {
    to: '/projects',
    text: 'projects',
  },
  {
    to: '/projects/the-lift',
    text: 'the lift',
  },
  {
    to: '/projects/the-lift',
    text: 'project 2',
  },
  {
    to: '/projects/the-lift',
    text: 'project 3',
  },
  {
    to: '/projects/the-lift',
    text: 'project 4',
  },
  {
    to: '/projects/the-lift',
    text: 'project 5',
  },
]);
</script>
