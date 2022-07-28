<template>
  <div class="view flex flex-col place-items-start">
    <h1>Index page</h1>

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
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
const increment = () => count.value++;
const reduction = () => count.value--;
</script>
