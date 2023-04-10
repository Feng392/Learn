<script setup>
import { ref } from "vue";

const list = ref([]);
const inp = ref('');
const isSet = ref(false);
const currentIndex = ref(-1);

function add() {  
    list.value.push(inp.value);
    // 清空输入框
    inp.value = '';
}

function onDelete(index) {  
    list.value.splice(index, 1);
}
function onSet(index) { 
    currentIndex.value = index;
    isSet.value = true;
}
</script>

<template>

    <input type="text" v-model.trim="inp">
    <button @click="add">新增</button>
    
    <ul>
        <li 
            v-for="(item, index) in list" 
            :key="index"
        >
        <input type="text" 
        v-if="isSet"
        v-model="inp"
        >
        <span v-else>
            {{ item }}
        </span>
        
        <button @click="onDelete(index)">
            删除
        </button>
        <button @click="onSet(index)">
            {{ isSet ? '提交' : '修改' }}
        </button>
        </li>
    </ul>
</template>