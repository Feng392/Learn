<script setup lang="ts">
import { ref, provide } from 'vue';
// 提供一个值
provide('a', 123);
</script>
<template>
<div>
  这是组件a
  <slot></slot>

</div>
</template>
sds

<style lang="less" scoped>

</style>
