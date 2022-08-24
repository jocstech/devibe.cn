<template>
  <img class="icon" :src="`/images/icons/svg/${name}.svg`" :alt="name" />
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
const props = defineProps(['name']);
const { name } = toRefs(props);
</script>

<style lang="scss" scoped></style>
