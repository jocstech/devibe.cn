<template>
  <header
    z-20
    top-0
    sticky
    transition
    w-full
    bg-white
    shadow-md
    dark="bg-dark "
    :class="onTop ? 'onTop' : 'offTop'"
    class="header"
  >
    <div flex="~" class="sm:container sm:mx-auto justify-between">
      <HeaderBranding class="flex-shrink-0 m-2 w-90px md:w-120px" />
      <HeaderNavs />
      <HeaderToolbar class="flex-shrink-0" />
    </div>
    <HeaderSearchBar />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    animation: fade-down 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.onTop {
    }

    &.offTop {
      @apply filter opacity-90 backdrop-filter backdrop-blur-lg;
    }
  }
</style>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import { useWindowScroll, useEventListener } from '@vueuse/core';

  const windowScroll = reactive(useWindowScroll());
  const onTop = useOnTop();

  onMounted(() => {
    useEventListener(window, 'scroll', (e) => {
      onTop.value = windowScroll.y < 300;
    });
  });
</script>
