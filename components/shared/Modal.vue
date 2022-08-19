<template>
  <teleport to="body">
    <transition
      name="fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div v-if="show">
        <div
          class="h-full w-full fixed top-0 left-0 z-40 bg-black bg-opacity-30"
          @click="hide"
        ></div>
        <div
          class="p-6 bg-white rounded-lg text-sm sm:text-lg pt-6 shadow-lg w-11/12 sm:w-352px fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <div class="pb-6 text-center" v-if="props.title || props.subtitle">
            <h3
              class="text-base sm:text-xl mb-2 font-semibold"
              v-if="props.title"
            >
              {{ props.title }}
            </h3>
            <h4 class="text-gray-600 font-light" v-if="props.subtitle">
              {{ props.subtitle }}
            </h4>
          </div>
          <div class="content">
            <slot><div class="text-center">No Content!</div> </slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['show', 'title', 'subtitle']);
const emit = defineEmits(['open', 'opened', 'close', 'closed', 'submit']);

function hide() {
  console.log('close click registered');
  emit('close');
}
function beforeEnter() {
  emit('open');
}
function afterEnter() {
  emit('opened');
}
function beforeLeave() {
  emit('close');
}
function afterLeave() {
  emit('closed');
}
</script>

<style scoped lang="scss">
.fade-enter-active {
  animation: fade-in 0.2s cubic-bezier(0.86, 0, 0.07, 1);
}

.fade-leave-active {
  animation: fade-out 0.2s cubic-bezier(0.86, 0, 0.07, 1);
}
</style>
