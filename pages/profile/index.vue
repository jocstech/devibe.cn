<template>
  <div class="w-full min-h-screen flex-center flex-col gap-12">
    <h1 class="text-3xl">这一页只有登陆才能看到</h1>
    <div class="border">
      {{ user }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, user } = useAuth();
</script>

<style scoped></style>
