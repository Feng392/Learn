<!-- <script setup>
import { ref, computed, onUpdated } from 'vue';

const a = ref(1);
const b = ref(2);
const c = computed(() => a.value + b.value);
setInterval(() => {
    a.value++;
}, 2000);

onUpdated(() => {
    console.log(c.value);
})
</script>

<template>
    <div>
        {{ c }}
    </div>
</template> -->


<script setup>
import { ref, computed, onUpdated } from 'vue';

const a = ref(1);
const b = ref(2);
const c = computed(() => {
    a.value + b.value;
});

setInterval(() => {
    a.value++;
}, 10000);

// 数据更新后
onUpdated(() => {
    console.log(c.value);
});
</script>

<template>

    <div> {{ c }}</div>
</template>