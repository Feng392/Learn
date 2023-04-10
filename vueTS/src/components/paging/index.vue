<script setup lang="ts">
import { ref } from 'vue';

let currentIndex = ref(0);
interface PagePerson {
    default: number,
    max: number;
};
const props = defineProps<PagePerson>();

function Left() {
    currentIndex.value--;
}
function Right() {
    currentIndex.value++;
}
function highlight(index: number) {
    currentIndex.value = index;
}
</script>

<template>
<div class="pages">
    <button
        :disabled="currentIndex === props.default"
        @click="Left"
    >
        &lt;
    </button>
    <div 
        class="num"
        :class="{ highlight: currentIndex === index}"
        v-for="(item, index) in props.max"   
        :key="index"
        @click="highlight(index)"
    >
        {{ item }}
    </div>
    <button 
        :disabled="currentIndex === props.max - 1"
        @click="Right"
    >
        >
    </button>
</div>
</template>

<style lang="less" scoped>
.pages {
    height: 30px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    
    .num {
        color: #666;
        // 鼠标点击变小手
        cursor:pointer;
    &.highlight {
        color: red;
        }
    }

}
</style>
