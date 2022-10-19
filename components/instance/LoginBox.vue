<template>
  <div class="login-box prose">
    <div class="header text-center">
      <h3>账号登陆.</h3>
    </div>
    <form class="form" @submit.prevent="login">
      <div class="input-group">
        <label for="username">用户名</label>
        <input
          name="username"
          type="text"
          placeholder="用户名/ID"
          v-model="credential.username"
        />
      </div>
      <div class="input-group">
        <label for="password">密码</label>
        <input
          name="password"
          type="password"
          placeholder="密码"
          v-model="credential.password"
        />
      </div>

      <div class="input-group">
        <div class="term-line">
          <input
            class="cursor-pointer"
            type="checkbox"
            v-model="isTermChecked"
          />
          <span>
            我已阅读并同意<strong>服务协议</strong>和<strong
              >隐私政策</strong
            ></span
          >
        </div>
        <button
          :class="`btn ${isLoading ? 'btn-loading' : 'btn-primary'}`"
          type="submit"
          :disabled="isLoading"
        >
          {{ isLoading ? '登陆中...' : '立即登陆' }}
        </button>
      </div>
    </form>
    <div
      v-if="errorMsg"
      class="mt-2 text-center text-red-700 dark:text-red-500 text-sm"
    >
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const { $login } = useNuxtApp();
const isTermChecked = ref(true);
const isLoading = ref(false);
const errorMsg = ref(null);

const credential = reactive({
  username: 'jocstech',
  password: '135246999',
});

const login = async () => {
  if (!isTermChecked.value) {
    errorMsg.value = '必须同意我们的条款才能登陆';
    return;
  }

  isLoading.value = true;
  errorMsg.value = null;

  if (credential.username && credential.password) {
    await $login(credential);
  } else {
    errorMsg.value = '请检查你的用户名或者密码';
    console.error(errorMsg.value);
  }
  isLoading.value = false;
};
</script>

<style scoped></style>
