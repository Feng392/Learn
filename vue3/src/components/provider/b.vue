<script setup lang="ts">
import { ref, inject } from 'vue';
import  ProvideC  from './c.vue';
const a = inject('a');
</script>

<template>
  <div>
    这是组件b:{{ a }} <provide-c></provide-c>
  </div>
</template>

<style lang="less" scoped>

</style>
