<template>
  <header
    ref="header"
    class="headerAnimition w-full bg-gray-50 text-black shadow-xl"
  >
    <div class="sm:container sm:mx-auto flex justify-between">
      <LayoutBranding class="flex-shrink-0 m-2 w-90px md:w-120px" />
      <LayoutNavs />
      <LayoutToolbar class="flex-shrink-0" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@keyframes headerAnimition {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: auto;
  }
}

.headerAnimition {
  animation: headerAnimition 0.5s forwards ease-in;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const header = ref();
onMounted(() => {});
</script>
