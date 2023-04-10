<script setup lang="ts">
import { ref, provide, inject, computed } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// 把activeName 传下去
// 如果 provide 想要传一个响应式的数据，那么这个数据需要是响应式的，用ref或者computed包裹一下
provide('activeName', computed(() => props.modelValue));
// 把 修改activeName 的方法传下去
provide('changeActiveName', (name: string) => {
  emit('update:modelValue', name);
});

</script>

<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.tabs {
  position: relative;
}
</style>
