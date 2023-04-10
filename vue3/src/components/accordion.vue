<script setup>
import { ref } from 'vue';

const list = ref([
    {
        id: 1,
        content: 'shanghai',
        children: [
            {
                id: 1, 
                content: 'beijing beijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijingbeijing',
            },
        ]
    },
    {
        id: 2,
        content: 'shanghai',
        children: [
            {
                id: 1, 
                content: 'beijing',
            }
        ]
    },
    {
        id: 3,
        content: 'shanghai',
        children: [
            {
                id: 1, 
                content: 'beijing',
            }
        ]
    },
]);
const currentId = ref(-1);
const height = ref(0);
const visible = ref(false);

function hasChild(id, child) {  
    if (currentId.value === id) {
        currentId.value = -1;
    } else {
        currentId.value = id;
        // 使用傀儡div， 马上删除，
        // 把盒子中的内容放到傀儡div中，获取他的高度后
        // 如果 当前的id = 点击的id  那就显示这个高度
        const div = document.createElement('div');
        // 给傀儡盒子添加内容
        div.innerText = child.content;
        div.setAttribute('class', 'child');
        // 挂载盒子在body上
        document.body.appendChild(div);
        height.value = div.offsetHeight;
        div.remove();
    }
}
</script>

<template>
    <div>1111</div>
    <div class="box">
        <div class="father" 
            v-for="item in list"
            :key="item.id"
            @click="hasChild(item.id, item.children[0])"
        >   
            <div class="header">
                <div 
                    :class="{icon: true, active: currentId === item.id}"
                > 
                > 
                </div>
            <div> {{  item.content }}</div>
            </div>        
            <!-- children -->
            <!-- 父亲点击的时候显示或者隐藏 -->
            <div 
                class="child"
                v-for="child in item.children"
                :key="child.id"
                :style="{
                    height: `${ currentId === item.id ? height : 0}px`,
                    padding: `${currentId === item.id ? 10 : 0}px 8px`
                }"
            >
                <div> {{  child.content }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 800px;
    height: 100px;
    .father {
        width: 100%;
        border: 1px solid #666;
        text-align: center;

        .header {
            height: 30px;
            display: flex;
            padding: 0 8px;
            .icon {
                margin-right: 10px;
                color: #000;
                &.active {
                    transform: rotate(90deg);
                    transition: transform .3 ease;
                }
            }
        }
        .child {
            overflow: hidden;
            // height: 30px;
            padding: 0 8px;
            background-color: #f40;
            outline: 1px solid #666;
            text-align: center;
            transition: height .3s ease;
        }
    }
}
</style>

<!--  -->
<style>
    .child {
        overflow: hidden;
        /* height: 30px; */
        padding: 0 8px;
        background-color: #f40;
        outline: 1px solid #666;
        text-align: center;
        transition: height .3s ease;
    }
</style>