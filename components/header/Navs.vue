<template>
  <nav class="px-2 py-3 flex w-full justify-center whitespace-nowrap overflow-hidden <sm:hidden">
    <ul class="flex justify-center gap-3 text-xs font-light sm:text-sm md:text-md lg:text-lg xl:text-xl capitalize">
      <li class="cursor-pointer" v-for="menu of menus" :key="menu.text">
        <nuxt-link :to="menu.to" class="transition p-1 rounded-sm hover:text-accent dark:hover:text-accent-dark">{{
            menu.text
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply text-blue-400;
}
</style>

<script lang="ts" setup>
import { menuData } from "@/routers";
const menus = ref(menuData.mainHeader);
</script>
