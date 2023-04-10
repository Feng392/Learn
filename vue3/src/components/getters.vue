<script setup>
import store from '@/store/index.js';
import { computed } from 'vue';


const doneTodosCount = computed(() => store.getters.doneTodosCount);

</script>

<template>
   <p>已完成的任务数量: {{ doneTodosCount  }}</p>
</template>

<style lang="less" scoped>

</style>
