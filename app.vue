<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <TheHeader :class="headerClass" />
    <div class="w-full h-52px"></div>
    <NuxtPage />
    <TheFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const headerClass = ref('');
let scrollHandler;
onMounted(() => {
  scrollHandler = window.addEventListener(
    'scroll',
    (e) => (headerClass.value = window.scrollY > 60 ? 'fixedHeader' : '')
  );
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>

<style lang="scss">
.fixedHeader {
  @apply fixed top-0;
}
</style>
