<template>
  <div ref="searchBar" class="searchBar" :class="showSearchBar ? 'show' : 'hide'">
    <div flex place-items-center sm="container mx-auto">
      <input
        class="w-full transition-all rounded p-2 outline-none border border-2 border-transparent hover:border-gray-600"
        type="text"
        placeholder="输入您要搜索的内容..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useElementHover } from '@vueuse/core';

  // 搜索栏动画逻辑
  const showSearchBar = useShowSearchBar();
  const searchBar = ref();
  const isSearchBarHovered = useElementHover(searchBar);

  watch(isSearchBarHovered, (value) => {
    showSearchBar.value = value;
  });
</script>

<style lang="scss" scoped>
  .searchBar {
    @apply max-h-20 overflow-y-hidden transition-all duration-500 animate-ease-[cubic-bezier(0,1.0.5,0.5,1)];

    &.show {
      @apply p-3 border-t opacity-100;
    }
    &.hide {
      @apply max-h-0 opacity-0;
    }
  }
</style>
