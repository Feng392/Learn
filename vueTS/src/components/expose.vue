<script setup lang="ts">
import { ref, defineExpose, reactive, watch } from 'vue';

let xiaoZhi = reactive({
    stator: '小志',
    age: 27
});

let xiaoXiaoZhi = ref('小小志');

defineExpose({
    xiaoZhi,
    xiaoXiaoZhi,
});

watch(
    () => xiaoXiaoZhi.value,
    () => {
        console.log('监听后的值', xiaoXiaoZhi.value);
    }
)
</script>

<template>

    <div>我是子组件- ->{{ xiaoZhi.stator }} </div>
</template>

<style lang="less" scoped>

</style>
