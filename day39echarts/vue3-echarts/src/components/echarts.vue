<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
});
// 接收父组件传过来的方法
const emit = defineEmits(["onChangeOption"]);

let myChart;

function onClick() {
  emit("onChangeOption");
  console.log(props.options.series[0].data);
  myChart.setOption(props.options);
}

onMounted(() => {
  console.log(props.options);
  console.log(document.querySelector(".echarts"));
  // $emit(
  //   "onChangeOption",
  //   props.options.series[0].map(() => Math.floor(Math.random() * 100))
  // );
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.querySelector(".echarts"));
  // 绘制图表
  console.log(props.options);
  myChart.setOption(props.options);
});
</script>

<template>
  <div class="echarts"></div>
  <button @click="onClick">点击改变数据</button>
</template>

<style scoped>
.echarts {
  width: 100%;
  height: 500px;
  outline: 1px red solid;
}
</style>