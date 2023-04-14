<template>
  <div id="app">
    <Echarts
      :option="option"
      :style="{ width: '100%', height: '500px' }"
      @changeOption="changeOption"
    />
  </div>
</template>

<script>
import Echarts from "./components/e-charts.vue";

export default {
  name: "App",
  components: {
    Echarts,
  },
  data() {
    return {
      option: {
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
      },
    };
  },
  methods: {
    changeOption() {
      this.option.series[0].data.forEach((item, index) => {
        this.option.series[0].data[index] = Math.floor(Math.random() * 200);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>