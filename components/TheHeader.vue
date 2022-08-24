<template>
  <header
    :class="downScrolled ? 'scrollDown' : 'touchTop'"
    class="fixed top-0 w-full bg-gray-50 dark:bg-dark-900 text-black dark:text-white shadow-xl dark:shadow-none z-20"
  >
    <div class="sm:container sm:mx-auto flex justify-between">
      <LayoutBranding class="flex-shrink-0 m-2 w-90px md:w-120px" />
      <LayoutNavs />
      <LayoutToolbar class="flex-shrink-0" />
    </div>
  </header>
  <div class="h-37px sm:h-52px"></div>
</template>

<style lang="scss" scoped>
.touchTop {
  animation: fade-down 0.8s forwards cubic-bezier(0.86, 0, 0.07, 1);
}

.scrollDown {
  animation: fade-up 0.8s forwards cubic-bezier(0.86, 0, 0.07, 1);
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWindowScroll } from '@vueuse/core';

const { x, y } = useWindowScroll();
const downScrolled = computed(() => {
  return x.value > 300;
});
</script>
