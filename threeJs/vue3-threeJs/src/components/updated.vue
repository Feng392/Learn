<script setup>
import { updated, nextTick } from "vue";

updated(() => {
  console.log(document.body);
});
nextTick(() => {
  console.log(document.body);
});
</script>

<template>
  <div class="mian"></div>
</template>

<style lang="less" scoped></style>