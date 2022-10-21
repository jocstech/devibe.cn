<template>
  <div class="toolbar flex">
    <!-- 搜索按钮：常显 -->
    <div
      ref="searchButton"
      class="search transition bg-secondary hover:bg-indigo-600 px-3 flex items-center justify-center text-white flex items-center justify-center cursor-pointer"
    >
      <svg class="icon-responsive" width="32" height="32" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
        />
      </svg>
    </div>

    <!-- 已登陆状态:显示用户头像名称 -->
    <div
      v-show="authenticated"
      class="auth transition bg-primary dark:bg-primary-dark hover:bg-indigo-700 text-white px-3 flex items-center justify-center whitespace-nowrap cursor-pointer text-sm"
      @click="gotoProfilePage"
    >
      <img
        class="rounded-full w-8 p-1px outline outline-light-800"
        src="https://api.devibe.cn/upload/avatars/avatar1.jpg"
        :alt="user.username"
      />
      <div class="name pl-2 flex flex-col place-items-center leading-none">
        <span class="text-base font-bold">{{ user.nickname }}</span>
        <span class="text-xs font-thin">{{ user.username }}</span>
      </div>
    </div>

    <!-- 未登陆状态:显示登录按钮 -->
    <div
      v-show="!authenticated"
      class="auth transition bg-primary dark:bg-primary-dark hover:bg-indigo-700 text-white px-3 flex items-center justify-center whitespace-nowrap cursor-pointer text-sm"
      @click="gotoLoginPage"
    >
      <svg class="icon-responsive" width="32" height="32" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
        />
      </svg>
      <span class="-md:hidden">登陆</span>
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
const { authenticated, user } = useAuth();

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
