<template>
  <div class="toolbar flex">
    <div
      class="search transition bg-blue-700 hover:bg-blue-600 px-3 flex items-center justify-center text-white flex items-center justify-center cursor-pointer"
    >
      <SharedIcon class="filter invert w-4 md:w-6" name="search" />
    </div>
    <div
      class="auth transition bg-blue-900 hover:bg-blue-800 text-white px-3 flex items-center justify-center whitespace-nowrap cursor-pointer text-sm"
      @click="openAuthModal"
    >
      <SharedIcon class="filter invert w-4 md:w-6" name="user" />
      <span class="-md:hidden">登陆</span>
    </div>
    <InstanceAuthModal :show="showAuthModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showAuthModal = ref(false);

function openAuthModal() {
  showAuthModal.value = true;
}
</script>
