<script setup lang="ts">
import { ref } from 'vue';

interface Item {
    id: number,
    value: string,
}
let idCounter = ref(1);
const inputValue = ref<string>('')
const arr = ref<Item[]>([]);
const currentId = ref<number>(-1);
// 修改
const setShow = ref<Boolean>(true);
function onAdd() {
    arr.value.push({
        id: idCounter.value++,
        value: inputValue.value,
    });
};
function Delete(id: number) {
    currentId.value = id;
    if (currentId.value === id) {
        arr.value.splice(currentId.value, 1);
    }
    currentId.value = -1;
}
function setValue(id: number) {
    currentId.value = id;
    if (currentId.value === id) {
        setShow.value = false;
    }
}
</script>

<template>
    <input type="text" v-model.trim="inputValue">
    <button @click="onAdd()">新增</button>
    <ul>
        <li v-for="(item, index) in arr" :key="item.id">
            <span v-if="currentId === item.id">{{ item.value}}</span>
            <input v-else type="text" v-model.trim="inputValue">
            <button @click="Delete(item.id)">删除</button>
            <button @click="setValue(item.id)">{{ currentId === item.id ? '修改' : '确定' }}</button>
        </li>
    </ul>
</template>