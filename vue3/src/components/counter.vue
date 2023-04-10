<!-- vue3 中 script 中必须写setup ，不然就是vue2的语法， 需要写 export default-->
<script setup>
import { ref } from 'vue';

// 直接创建变量
const count = ref(100);
// 发请求写在这里，创建前后没有了

function OnClick() {  
  count.value++;
}
</script>

<template>
  <div> {{ count }}</div>
  <button @click="OnClick">+ 1</button>
</template>

<style scoped>
</style>
