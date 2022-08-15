<template>
  <div
    class="container mx-auto view flex flex-col place-items-start p-4 sm:p-0"
  >
    <h1>首页内容</h1>
    <div
      class="info transition border rounded p-12 text-center hover:bg-red-900 hover:text-white cursor-pointer"
    >
      <span class="text-3xl">本网站正在更新中(2022.7.31)</span>
    </div>
    <div class="btn-group flex gap-0">
      <button
        class="px-3 py-2 bg-black text-white hover:bg-indigo-700"
        @click="increment"
      >
        ADD+
      </button>
      <div class="current-value">
        <div class="px-6 border text-4xl">{{ count }}</div>
      </div>
      <button
        class="px-3 py-2 bg-black text-white hover:bg-indigo-700"
        @click="reduction"
      >
        SUB-
      </button>
    </div>

    <article>
      <h1>大标题</h1>
      <h2>小标题</h2>
      <p v-for="n in 100" :key="n">
        爱哦傻傻哒好似电话撒活动啊说哦i啊速度哦阿苏嗲说u哦i啊速冻i啊u哦i度啊说哦i啊u送的u阿松度澳督奥苏大哦索阿四u奥神队
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home Page',
});

const count = ref(0);
const increment = () => count.value++;
const reduction = () => count.value--;
</script>
