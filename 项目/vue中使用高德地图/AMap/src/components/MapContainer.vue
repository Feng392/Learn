<script setup>
import { onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map;

async function initMap() {
  const AMap = await AMapLoader.load({
    key: "7a8ae9abcff77ec300bfeafb2cfa05e3",
    version: "2.0",
    plugins: ["AMap.ToolBar"],
  });
  map = new AMap.Map("container", {
    //设置地图容器id
    viewMode: "3D", //是否为3D地图模式
    // 角度
    pitch: 50,
    //   镜头
    rotation: -30,
    zoom: 5, //初始化地图级别
    center: [105.602725, 37.076636], //初始化地图中心点位置
  });
}

onMounted(() => {
  initMap();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>