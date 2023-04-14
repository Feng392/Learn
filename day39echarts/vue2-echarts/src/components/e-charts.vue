<template>
  <div>
    <div class="main"></div>
    <button @click="onChangeOption">点击切换数据</button>
  </div>
</template>

<script>
import * as echarts from "echarts";
// import { ref } from "vue";
//
// let option = ref();

let myChart = null;

export default {
  name: "e-charts",
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onChangeOption() {
      this.$emit("changeOption");
      // myChart.setOption(this.option); // 这样写不行，因为option是ref类型，不能直接赋值
      // option.value = this.option;
      // myChart.setOption(option.value);
      myChart.setOption(this.option);
    },
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.querySelector(".main"));
    // option.value = this.option;
    // 绘制图表
    myChart.setOption(this.option);
  },
  // watch: {
  //   option(newValu) {
  //     myChart.setOption(newValu);
  //   },
  // },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 500px;
}
</style>