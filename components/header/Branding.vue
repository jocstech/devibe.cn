<template>
  <div class="branding flex flex-col justify-center">
    <nuxt-link to="/">
      <div class="logo">
        <img v-show="isDark" :src="logoDark" alt="Devibe.cn Logo" />
        <img v-show="!isDark" :src="logoLight" alt="Devibe.cn Logo" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const logoLight = '/images/branding/logo-cn.svg';
const logoDark = '/images/branding/logo-cn-dark.svg';
const logoMono = '/images/branding/logo-mono.svg';
</script>

<style scoped lang="scss"></style>
