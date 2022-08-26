<template>
  <div class="branding flex flex-col justify-center">
    <nuxt-link to="/">
      <div class="logo">
        <img :src="isDark ? logoDark : logoLight" alt="Devibe.cn Logo" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const logoLight = '/images/branding/logo.svg';
const logoDark = '/images/branding/logo-dark.svg';
const logoMono = '/images/branding/logo-mono.svg';

const isOnTop = useOnTop();
</script>

<style scoped lang="scss"></style>
