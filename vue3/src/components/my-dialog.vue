<script setup>

defineProps({
    visible: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <div class="dialog"
        v-if="visible" 
        @click.self="$emit('update:visible', false)">
        <div class="win"></div>
    </div>
</template>

<style lang="less" scoped>
.dialog{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #aaa;

    .win{ 
        position: absolute;
        width: 300px;
        height: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }
}
</style>