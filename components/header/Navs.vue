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
    text: '首页',
  },
  {
    to: '/articles',
    text: '文章',
  },
  {
    to: '/projects',
    text: '项目',
  },
  {
    to: '/projects/the-fancy-switch',
    text: '开关',
  },
  {
    to: '/projects/the-lift',
    text: '电梯',
  },
  {
    to: '/projects/the-lift',
    text: '关于作者',
  },
  {
    to: '/profile',
    text: '个人中心(加密)',
    protected: true,
  },
]);
</script>
