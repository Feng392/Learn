<script setup lang="ts">
  import { ref, inject } from 'vue';
  const a = inject('a');
</script>

<template>
  <div>
    这是组件c: {{ a }}
  </div>
</template>
<style lang=less >
</style>