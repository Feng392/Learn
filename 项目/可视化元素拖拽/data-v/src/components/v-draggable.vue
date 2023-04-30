<script setup>
// 组件三要素：props、emit、slots
import { ref, onMounted, onBeforeUnmount, onUpdated } from "vue";

const props = defineProps({
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
});
// v-model 语法糖就是 相当于 v-bind:value="x" v-on:input="x = $event"
// vue2中的v-model是语法糖，vue3中的v-model是一个组合API
// vue2 : v-model  x.sync="变量名"
// vue3 : v-model:x="变量名"  不写x默认是 modelValue

// 可响应变量
// data / ref / reactive
// props
// computed

const emit = defineEmits([
  "update:x",
  "update:y",
  "update:width",
  "update:height",
]);
// 拖拽功能  鼠标事件要获取dom元素
// mouseDown 事件  鼠标按下事件
// mouseMove 事件  鼠标移动事件
// mouseUp 事件  鼠标抬起事件

// 记录旧的值
const oldPosition = {
  x: props.x,
  y: props.y,
};
// 初始位置
const position = {
  x: props.x,
  y: props.y,
};
onMounted(() => {
  document.addEventListener("mouseup", onMouseUp);
});
onBeforeUnmount(() => {
  document.removeEventListener("mouseup", onMouseUp);
});

function onMouseDown(e) {
  //   记录旧的位置
  oldPosition.x = props.x;
  oldPosition.y = props.y;
  // 记录原有的位置 以便于计算新的位置(原位置+差值)
  position.x = e.clientX;
  position.y = e.clientY;
  document.addEventListener("mousemove", onMouseMove);
  //   鼠标变小手样式
  document.body.style.cursor = "move";
}

function onMouseMove(e) {
  // console.log(e.clientX, e.clientY);
  emit("update:x", oldPosition.x + e.clientX - position.x);
  emit("update:y", oldPosition.y + e.clientY - position.y);
}

function onMouseUp() {
  console.log(111);
  document.removeEventListener("mousemove", onMouseMove);
  //   还原鼠标样式
  document.body.style.cursor = "default";
}
</script>

<template>
  <div
    class="draggable"
    :style="{
      transform: `translate(${props.x}px, ${props.y}px)`,
      width: `${props.width}px`,
      height: `${props.height}px`,
    }"
    @mousedown="onMouseDown"
  >
    <slot />
  </div>
</template>

<style scoped>
.draggable {
  outline: 1px solid red;
}
</style>