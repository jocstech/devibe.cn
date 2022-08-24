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
import { isDark } from '@/composables';
const logoLight = '/images/branding/logo.svg';
const logoDark = '/images/branding/logo-dark.svg';
</script>

<style scoped lang="scss"></style>
