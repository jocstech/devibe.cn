<template>
  <Teleport to="body">
    <div v-if="show">
      <div
        class="h-full w-full fixed top-0 left-0 z-40 bg-black bg-opacity-30"
        @click="hide"
      ></div>
      <div
        class="bg-white rounded-lg text-sm sm:text-lg pt-6 shadow-lg w-64 sm:w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <div class="px-6 pb-6 text-center">
          <h3 class="text-base sm:text-xl mb-2 font-semibold">Main Subtitle</h3>
          <p class="text-gray-600 font-light">
            What action would you like to perform?
          </p>
        </div>
        <div class="px-6 pb-3 content">
          <slot><div class="text-center">No Content!</div> </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['close', 'submit']);
const show = ref(true);

function hide() {
  console.log('close click registered');
  show.value = false;
  emit('close');
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
