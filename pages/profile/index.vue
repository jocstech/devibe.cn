<template>
  <div class="w-full min-h-screen flex-center flex-col gap-12">
    <h1 class="text-3xl dark:text-light-500">⚠️这一页只有登陆才能看到</h1>
    <h2 class="text-2xl dark:text-light-400">当前登陆用户</h2>
    <div v-if="user" class="">
      <div
        class="rounded n bg-white p-12 flex flex-col place-items-center space-y-3 shadow-2xl"
      >
        <img
          class="rounded-full w-80 outline-dark-400"
          :src="user.avatar"
          :alt="user.username"
        />
        <span class="font-black text-4xl"
          >{{ user.first_name }} {{ user.last_name }}</span
        >
        <span class="text-dark-50">
          {{ user.username }} (ID: {{ user._id }})</span
        >
        <div class="flex flex-col place-items-center space-y-2">
          <span> Email: {{ user.email }}</span>
          <span> Phone: {{ user.phone }}</span>
          <span> Since: {{ new Date(user.created_at).toDateString() }}</span>
        </div>

        <button class="btn bg-primary text-white hover:bg-primary-dark">
          退出账号
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, user } = useAuth();
</script>

<style scoped></style>
