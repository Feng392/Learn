<script setup lang="ts">
import { ref, inject } from 'vue';
const props = defineProps<{
  label: string;
  name: string;
}>();

// 接收activeName
const activeName = inject('activeName');
// 接收改变activeName的方法
const changeActiveName = inject('changeActiveName') as (name: string) => void;

function TabCheck (name: string) {
  changeActiveName(name);
}
</script>

<template>
  <div class="tab"
    :class="{ active: props.name === activeName}"  
    @click="TabCheck(props.name)"
  >
    {{ props.label }}
    <div class="content" v-show="props.name === activeName">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab {
  display: inline-block;
  margin-right: 20px;
  .content {
    color: #000;
    position: absolute;
    left: 0;
  }
}
.active{
  color: #f40;
}
</style>
