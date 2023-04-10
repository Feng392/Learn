<script setup>
import { ref, onMounted } from 'vue';

const r = ref(null);
const list = ref([
    1, 2, 3, 4
])

onMounted(() => {
    // 打印出来的是数组
    // [ 0: div, 1: div, 2: div.....]
    console.log(r.value);
    // 可用通过 ref[索引] 找到对应的元素
    console.dir(r.value[0].offsetHeight);
});

</script>

<template>

    <div 
        v-for="(item, index) in list" 
        :key="index"
        ref="r"
        >
        {{ item  }}
    </div>
</template>