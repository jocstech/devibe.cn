<template>
  <img class="icon" :src="src" :alt="props.name" />
</template>

<script lang="ts" setup>
const props = defineProps(['name']);
const src = `/images/icons/svg/${props.name}.svg`;
</script>

<style lang="scss" scoped></style>
