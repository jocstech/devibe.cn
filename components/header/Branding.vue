<!--
 * @Author       : Yulong Fang <aionv@qq.com>
 * @Date         : 2024-12-13 11:24:10
 * @LastEditors  : Yulong Fang <aionv@qq.com>
 * @LastEditTime : 2024-12-13 11:43:53
 * @Description  :  
-->
<template>
  <div class="branding flex flex-col justify-center">
    <nuxt-link to="/">
      <div class="logo">
        <h1 class="text-xl text-blue font-500 shadow">开发者氛围</h1>
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
