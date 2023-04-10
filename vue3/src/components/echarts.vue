<template>
  <e-charts class="chart" :option="option" />
</template>

<script setup>

import { computed, ref } from "vue";

const data = ref([{
  value: 120
}, {
  value: 200
}, {
  value: 150
}, {
  value: 80
}, {
  value: 70
}, {
  value: 110
}, {
  value: 130
}])

setInterval(() => {
  data.value.forEach(item => {
    item.value = (Math.random() * 300);
  })
}, 1000)

const option = computed(() => {
 return {
   xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
   },
   yAxis: {
    type: 'value'
   },
   series: [
   {
    data: data.value.map(item => item.value),
    type: 'line'
   },
  ],
 }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>