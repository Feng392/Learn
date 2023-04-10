<!-- vue3 中 script 中必须写setup ，不然就是vue2的语法， 需要写 export default-->
<script setup>
// 生命周期
import { ref } from 'vue';

import Getters from '@/components/getters.vue'
// import ProvideA from '@/components/provider/a.vue';
// import ProvideB from '@/components/provider/b.vue';

import Tabs from '@/components/tab/tabs.vue';
import TabPane from '@/components/tab/tab-pane.vue';
// import MyDialog from '@/components/my-dialog.vue';
// function onAbc(a) {
//     console.log(a);
// }

// const visible = ref(false);

// function show() {
//     visible.value = true;
// }
// onBeforeMount(() => {
//   console.log('挂载前')
// })

// onMounted(() => {
//   console.log('挂载后')
// })

// import Tips from '@/components/tips/index.vue';

// const showtips = ref(false);
// function showTips() {
//     showtips.value = true;
// }

import Star from '@/components/star/index.vue';
const number = ref(5);
const show = ref(false);
const index = ref(0);
const currentIndex = ref(-1);
function bgShow() {
  currentIndex.value = index;
  show.value = !show.value;
}

// table 组件
const activeName = ref('first');
function handleClick(name) {
  console.log(name);
}
</script>

<template>
   
  <!-- <provide-a>
    <provide-b></provide-b>
  </provide-a> -->
  <hr>
  <tabs v-model="activeName" class="demo-tabs"
    @tab-click="handleClick">
    <tab-pane label="User" name="first">User</tab-pane>
    <tab-pane label="Config" name="second">Config</tab-pane>
    <tab-pane label="Role" name="third">Role</tab-pane>
    <tab-pane label="Task" name="fourth">Task</tab-pane>
  </tabs>
  <hr>
  <!-- <my-hightLight /> -->
  <!-- <my-todolist/> -->
  <!-- <my-computed /> -->
  <!-- <MyCarousel /> -->
  <!-- <my-echarts /> -->
  <!-- <my-accordion/> -->
  <!-- <mulit-ref /> -->

  <!-- 引入子组件 -->
  <!-- <my-button
        color ='red'
        @abc='onAbc'
    >    
        <template #prefix>我是具名插槽</template>
        我是插槽
    </my-button> -->

  <!-- <my-dialog
        v-model:visible="visible"
    >
    </my-dialog>
    <button @click="show">显示</button> -->

  <!-- Tips -->
  <!-- <button @click="showTips">弹出tips</button> -->
  <!-- <tips
        v-model="showtips"
    >
        <template #title>
            Tips
        </template>
        this is a messs
        <template #footer>
            <div class="footer">
                <button @click="showtips = false">Cancel</button>
                <button @click="showtips = false">ConFirm</button>
            </div>
        
        </template>
    </tips> -->
  <star :total="number" v-model="index">
    <template #star>
      <div class="star">
        <div class="shade1" @click="bgShow" :class="{ bg: show }"></div>
        <div class="shade2" @click="bgShow" :class="{ bg: show }"></div>
      </div>
    </template>
  </star>
  <Getters />
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: flex-end;

  button {
    width: 100px;
    height: 20px;
    margin-left: 10px;
  }
}

.star {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #f40;

  .shade1 {
    position: absolute;
    width: -50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;

    &.bg {
      background-color: transparent;
    }
  }

  .shade2 {
    position: absolute;
    width: -100%;
    transform: translateX(50%);
    width: 20px;
    height: 20px;
    background-color: #fff;

    &.bg {
      background-color: transparent;
    }
  }
}
</style>
