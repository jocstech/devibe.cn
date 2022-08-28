<template>
  <nav
    class="px-2 py-3 flex w-full justify-center whitespace-nowrap overflow-hidden <sm:hidden"
  >
    <ul
      class="flex justify-center gap-3 text-xs font-light sm:text-sm md:text-md lg:text-lg xl:text-xl capitalize"
    >
      <li class="cursor-pointer" v-for="nav of navs" :key="nav.text">
        <nuxt-link
          :to="nav.to"
          class="transition p-1 rounded-sm hover:text-accent dark:hover:text-accent-dark"
          >{{ nav.text }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply text-primary;
}
</style>

<script lang="ts" setup>
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
    to: '/projects/the-fancy-switch',
    text: 'the switch',
  },
  {
    to: '/projects/the-lift',
    text: 'the lift',
  },
  {
    to: '/projects/the-lift',
    text: 'about me',
  },
  {
    to: '/profile',
    text: 'profile',
  },
]);
</script>
