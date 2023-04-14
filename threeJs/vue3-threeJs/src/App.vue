<script setup>
import * as THREE from "three";
import { onMounted, ref, watch } from "vue";

const canvas = ref();
const arr = ref([]);
const list = ref([
  {
    color: 0xff0000,
    size: [1, 1, 0.5],
    position: [-5, 0, 0],
  },
  {
    color: 0x00ff00,
    size: [1, 1, 0.5],
    position: [-3, 0, 0],
  },
  {
    color: 0x0000ff,
    size: [1, 1, 0.5],
    position: [-1, 0, 0],
  },
]);

let p = -1;

const timer = setInterval(() => {
  p += 2;
  list.value.push({
    color: Math.random() * 0xffffff,
    size: [Math.random() * 3, Math.random() * 3, Math.random() * 3],
    position: [p, 0, 0],
  });

  // 加到10个的时候停止
  if (list.value.length >= 10) {
    // 清除setInterval
    clearInterval(timer);
  }
  // three不能写在这
}, 1000);

// 1.创建一个场景
const scene = new THREE.Scene();
// 新建一个组
const group = new THREE.Group();
// 将组添加到场景中
scene.add(group);

// 2.创建一个相机
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);

// 设置相机的位置
camera.position.z = 5;

// 3.创建一个渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
// document.body.appendChild(renderer.domElement);

onMounted(() => {
  // document.querySelector('#canvas').appendChild(renderer.domElement);
  canvas.value.appendChild(renderer.domElement);
});

// 4.创建一个几何体
// 几何体
// 材质
// 网格
// 循环 list 数组 生成网格

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// 监听 list 的变化
watch(
  () => list,
  () => {
    // 清空组
    group.clear();
    list.value.forEach((item) => {
      const geometry = new THREE.BoxGeometry(...item.size);
      const material = new THREE.MeshBasicMaterial({ color: item.color });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.x = item.position[0];
      cube.position.y = item.position[1];
      cube.position.z = item.position[2];
      group.add(cube);

      arr.value.push(cube);
    });
  },
  { deep: true }
);

// const animate = () => {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// };

function animate() {
  requestAnimationFrame(animate);

  arr.value.forEach((item) => {
    item.rotation.x += 0.01;
    item.rotation.y += 0.01;
  });
  renderer.render(scene, camera);
}

animate();
</script>

<template>
  <div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
  </div>
  <div id="canvas" ref="canvas"></div>
</template>

<style scoped>
#canvas {
  width: 800px;
  height: 600px;
  outline: 1px solid #f40;
}
</style>