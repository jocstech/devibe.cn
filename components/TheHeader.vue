<template>
  <header ref="header" class="w-full bg-gray-50 text-black shadow-xl">
    <div class="sm:container sm:mx-auto flex justify-between">
      <LayoutBranding class="flex-shrink-0 m-2 w-90px md:w-120px" />
      <LayoutNavs />
      <LayoutToolbar class="flex-shrink-0" />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const header = ref();
onMounted(() => {});
</script>
