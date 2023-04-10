<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0);
function onAdd() {  
    count.value++;
}
</script>

<template>
    {{count  }}
    <button @click="onAdd">+1</button>
</template>