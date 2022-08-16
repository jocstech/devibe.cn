<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <TheHeader class="fixed top-0" />
    <div class="w-full h-52px"></div>
    <NuxtPage />
    <TheFooter />
    <SharedModal></SharedModal>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {});
</script>

<style lang="scss"></style>
