<script setup>
import { onMounted, ref } from 'vue';

const currentIndex = ref(0);
const list = ref([1, 222222, 3, 44444]);
const left = ref(0);
const width = ref(0);
const box = ref(null);
const first = ref(null);

function isHightLight(index, e) {  
    currentIndex.value = index;
    console.log(e);
    left.value = e.target.offsetLeft - box.value.offsetLeft;
    width.value = e.target.offsetWidth;
}

onMounted(() => {
    // 获取第一个元素的宽度
    width.value = first.value[0].offsetWidth;
    console.log(first.value[0].offsetWidth);
})
</script>

<template>

<div class="box" ref="box">
    <span 
        class="main"
        :class="{ active: currentIndex === index}"
        v-for="(item, index) in list" 
        :key="index"
        ref="first"
        @click="isHightLight(index, $event)"
    >
        {{ item }}
    </span>
</div>
<div class="slider" 
    :style="{
        transform: `translateX(${left}px)`,
        width: `${width}px`
    }"
>
</div>

</template>

<style lang="less" scoped>

.box {
    
    .main {
        box-sizing: border-box;
        display: inline-block;
        height: 20px;
        margin: 20px;
        cursor: pointer;
        &.active {
            color: red;
        }
    }
}
.slider {
    width: 20px;
    height: 4px;
    background-color: red;
}
</style>