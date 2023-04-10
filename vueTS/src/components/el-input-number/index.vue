<script setup lang="ts">
import { ref } from 'vue';
// 定义类型
interface InputProps {
    num: number,
    min: number,
    max: number,
}


// defineProps<InputProps>();
// 带有默认值的props
const props =  withDefaults(defineProps<InputProps>(), {
    num: 2,
    min: 1,
    max: 10,
});

// 定义事件
const emit = defineEmits<{
    (e: 'update:num', num: number): void;
}>();

// 2.取值型函数 得到number
function getValue(num: number): number {
    if (num < props.min) {
        return props.min;
    } else if (num > props.max) {
        return props.max;
    } else {
        return num;
    }
    // 三元表达
    // return props.num < props.min ? props.min : props.num > props.max ? props.max : props.num;
}
// change事件
function onInput(e: Event) {
    // 类型断言  断言e.target是HTMLInputElement类型
    const { value } = e.target as HTMLInputElement;
    const inputNumber = Number(value);
    // console.log(inputNumber);
    
    // 如果inputNumber是NaN或者inputNumber和以前的值一样 就设置为原来的值(手动触发)
    if (isNaN(inputNumber) || getValue(inputNumber) === props.num) {
        console.log(getValue(inputNumber));
        
        console.log(inputNumber, '', props.num);
        
        (e.target as HTMLInputElement).value = String(props.num);
    } else {
        // 如果不是NaN就设置为新的值
        emit('update:num', getValue(inputNumber));
    }
}
</script>

<template>
    <button
        :disabled="props.num === props.min"
        @click="emit('update:num', props.num - 1)"
    >
        --
    </button>
    <input type="text"
        :value="num"
        @change="onInput($event)"
    >
    <button 
        :disabled="props.num === props.max"
        @click="emit('update:num', props.num + 1)"
    >
        ++
    </button>
</template>

<style lang="less" scoped>
</style>