<template>
  <div ref="searchBar" class="searchbar" :class="{ show: showSearchBar }">
    <div class="sm:container sm:mx-auto flex place-items-center">
      <input
        class="w-full transition-all rounded p-2 outline-none border border-2 border-transparent hover:border-gray-300"
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
.searchbar {
  @apply opacity-0 max-h-0 overflow-hidden transition-all;
  &.show {
    @apply opacity-100 p-3 border-t max-h-48;
  }
}
</style>
