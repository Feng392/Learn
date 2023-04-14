<script setup>
import { nextTick, ref, updated } from "vue";

const mySwitch = ref(false);

// updated(() => {
//   console.log(document.body);
// });
// nextTick(() => {
//   console.log(document.body);
// });

function isSwitch() {
  mySwitch.value = !mySwitch.value;
}
</script>

<template>
  <div :class="{ onOff: true, change: mySwitch }" @click="isSwitch"></div>
</template>

<style scoped>
.onOff {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: #0ff;
  box-shadow: 0px 0px 5px #999;
  transition: background-color 0.5s ease, margin-left 0.5s ease;
}

.onOff::before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  margin: 10px;
  margin-left: 10px;
  border-radius: 15px;
  background-color: #fff;
  transition: margin-left 0.5s ease;
}

.change {
  background-color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: #999;
  transition: background-color 0.5s ease;
}

.change::before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 15px;
  background-color: #fff;
  margin-left: 60px;
  transition: margin-left 0.5s ease;
}
</style>