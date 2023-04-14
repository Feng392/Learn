<script setup>
import Echarts from "./components/echarts.vue";
import { reactive, ref } from "vue";

const options = ref({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
});

const onChangeOption = () => {
  options.value.series[0].data = options.value.series[0].data.map(() =>
    Math.floor(Math.random() * 100)
  );
};
</script>

<template>
  <div class="main">
    <Echarts
      :options="options"
      @onChangeOption="onChangeOption"
      style="
         {
          width: 100%;
          height: 500px;
        }
      "
    />
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
</style>