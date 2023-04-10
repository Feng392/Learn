<script setup lang="ts">
import { useAdd } from '../../hooks/hello';

const { count, fn } = useAdd();
fn(6);
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style lang="less" scoped>

</style>
