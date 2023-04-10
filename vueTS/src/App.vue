<script setup lang="ts">
import { ref, defineEmits, defineProps, computed } from 'vue';
import MyBtn from './components/my-btn/index.vue';
// import Card from './components/card/index.vue';
import ElInputNumber from './components/el-input-number/index.vue';
import Paging from './components/paging/index.vue'
import MyHooks from './components/my-hooks/index.vue'
import Expose from './components/expose.vue'

const num = ref(1);

function a(e: MouseEvent) {
  console.log(e);
}

// Expose
const shield = ref();

const xxx = () => {
  // 接收暴露出来的值
  console.log("接收reactive暴露出来的值", shield.value.xiaoZhi);
  console.log("接收ref暴露出来的值", shield.value.xiaoXiaoZhi);
  shield.value.xiaoXiaoZhi = '小小雷';
  console.log('shield.value.xiaoXiaoZhi', shield.value.xiaoXiaoZhi);
}

// 直接取不到
// console.log(shield.value.xiaoZhi);
// console.log(shield.value.xiaoXiaoZhi);

computed(() => {
  console.log('num', num.value);
})


</script>

<template>
  <my-hooks />
  <!-- expose -->
  <Expose ref="shield"/>
  <button @click="xxx">获取暴露</button>

  <!-- <counter /> -->
  <!-- <todo-list /> -->
  <!-- <MyBtn
    type="danger"
    size="large"
    :round='false'
    color="#000"
    @click="a"
  >
    点击
  </MyBtn> -->
  <!-- <el-input-number
    v-model:num="num" 
    :min="2" 
    :max="8"
  >
  </el-input-number> -->
  <!-- <paging
    :default="0"
    :max="5"
  >
  </paging> -->


  <Card
    header="这是标题"
    :body-style="{
      color: '#f40',
      fontSize: '20px',
    }"
    shadow="always"
  >
  </Card>

</template>

<style scoped>
</style>
