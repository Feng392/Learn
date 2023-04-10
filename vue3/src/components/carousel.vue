<script setup>
import { ref } from 'vue';

const list = ref([
    { id: 0, src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp' },
    { id: 1, src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp' },
    { id: 2, src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp' },
    { id: 3, src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp' },
    { id: 4, src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp' },
]);

const pointerList = ref([]);

const left = ref(-500);
const carouselTime = ref(.3);
let number = ref(1);

(function getPointerList() {
    // console.log(1);
    pointerList.value = list.value.filter(d => d.id !== 3).filter(d => d.id !== 4)
    // console.log(pointerList.value);
}());

function onBlack() {
    number.value--;
    console.log( number.value);
    // left.value = left.value + 500;
    if (number.value < 1) {
        // 往右边走3步，选中它本身
        left.value = left.value - 1500;
        carouselTime.value = 0;
        setTimeout(() => {
            // 0.3秒切换到了第三张图片上
            left.value = -1500;
            carouselTime.value = .3;
            // 重置number 的值
            number.value = 3;
        },0)
    } else {
        left.value = left.value + 500 ;
        carouselTime.value = .3;
    }
}

function onNext() {
    number.value++;
    if (number.value > list.value.length - 2) {
        carouselTime.value = 0;
        left.value = left.value + 1500;
        // 下面就是快速切换的部分
        setTimeout(() => {
            left.value = - 500;
            carouselTime.value = .3;
        }, 0)
        number.value = 1;
    } else {
        carouselTime.value = 0.3;
        left.value = left.value - 500 ;
    }
}

function onPointer(id) { 
    // id + 1 === number
    if (id + 1 < number.value) {       
            onBlack();     
    }
    if (id + 1 > number.value) {
        const count =  id + 1 - number.value;
        for (let i = 0; i < count; i++) {
            onNext();
        }
    }
}
</script>

<template>
    <div class="main">
        <div class="view">
            <div
                class="box"
                :style="{ 
                    transform: `translateX(${left}px)`,
                    transition: `transform ${carouselTime}s ease`,
                    }"
                v-for="item in list"
                :key="item.id"
            >
                <img :src="item.src">
            </div>
        </div>
         <button class="btnLeft" @click="onBlack()">上一张</button>
        <button class="btnRight" @click="onNext()">下一张</button>
        <div class="pointers">
            <div 
                class="pointer" 
                :class="{ highlight: number === item.id + 1 }"
                v-for="item in pointerList"
                :key="item.id"
                @click="onPointer(item.id, $event)"
                >
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    position: relative;
    overflow: hidden;
    left: 50px;
    width: 500px;
    height: 200px;
    .view {
        width: 500px;
        height: 200px;
        display: flex;
        position: absolute;
        .box {
            flex-shrink:0;
            width: 500px;
            height: 200px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .btnLeft {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .btnRight {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .pointers {
        width: 60px;
        height: 10px;
        position: absolute;
        display: flex;
        justify-content: space-between;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        .pointer {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #999;
        }
        .highlight {
            background-color: #fff;
        }
    }
}
</style>