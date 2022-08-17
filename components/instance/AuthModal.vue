<template>
  <SharedModal :show="show" title="Login">
    <div class="bg-red-800 text-xl px-2">HTML Content</div>
  </SharedModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['show']);
const show = computed(() => props.show);
</script>
