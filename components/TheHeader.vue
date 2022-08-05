<template>
  <header class="bg-gray-50 text-black shadow-xl">
    <div class="inner flex">
      <TheBranding />
      <nav class="px-2 py-3 flex w-full justify-center">
        <ul class="flex justify-center gap-3 text-xl capitalize">
          <li
            class="hover:text-indigo-800 cursor-pointer"
            v-for="nav of navs"
            :key="nav.text"
          >
            <nuxt-link :to="nav.to">{{ nav.text }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <TheAuthStatus />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.router-link-active {
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import TheBranding from './TheBranding.vue';
import TheAuthStatus from './TheAuthStatus.vue';
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
