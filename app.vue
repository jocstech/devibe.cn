<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <TheHeader class="fixed top-0" />
    <div id="global-header-spacer" class="w-full"></div>
    <NuxtPage />
    <TheFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {});
</script>

<style lang="scss"></style>
