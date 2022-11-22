<template>
  <div flex="~ row" class="toolbar">
    <!-- 已登陆状态:显示用户头像名称 -->
    <div
      v-if="auth.user"
      transition
      px-3
      flex
      place-items-center
      bg-blue-600
      hover="bg-blue-700"
      text="white sm"
      whitespace-nowrap
      cursor-pointer
      class="auth"
      @click="gotoProfilePage"
    >
      <img
        class="rounded-full w-8 p-1px outline outline-light-800"
        :src="auth.user.avatar"
        :alt="auth.user.username"
      />
      <div class="name pl-2 flex flex-col place-items-center leading-none">
        <span class="text-base font-bold">{{ auth.user.nickname }}</span>
        <span class="text-xs font-thin">{{ auth.user.username }}</span>
      </div>
    </div>

    <!-- 未登陆状态:显示登录按钮 -->
    <div
      v-else
      px-3
      flex
      place-items-center
      transition
      bg="blue-500"
      hover="bg-blue-600"
      text="white sm"
      whitespace-nowrap
      cursor-pointer
      class="auth"
      @click="gotoLoginPage"
    >
      <div i="carbon-user"></div>
      <span class="-md:hidden">登陆</span>
    </div>

    <!-- 搜索按钮：常显 -->
    <div
      ref="searchButton"
      px-3
      flex
      place-items-center
      transition
      bg="blue-700"
      text="white sm"
      hover="bg-blue-800"
      cursor-pointer
      class="search"
    >
      <div i="carbon-search"></div>
    </div>

    <!-- 色彩模式切换键 -->
    <div class="flex-center w-8 md:w-14">
      <SharedThemeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useElementHover } from '@vueuse/core';
import { useAuthStore } from '~~/store/auth';
const auth = useAuthStore();

// 搜索栏UI逻辑
const searchButton = ref();
const showSearchBar = useShowSearchBar();
const isSearchButtonHovered = useElementHover(searchButton);

watch(isSearchButtonHovered, (value) => {
  showSearchBar.value = value;
});

const router = useRouter();

function gotoLoginPage() {
  router.push('/auth/login');
}
function gotoProfilePage() {
  router.push('/profile');
}
</script>
