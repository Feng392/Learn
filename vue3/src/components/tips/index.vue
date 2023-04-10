<script setup>

defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <div class="main" 
        v-if="modelValue"
         @click.self="$emit('update:modelValue', false)"
    >
        <div class="tips">
            <div class="x" 
                @click.stop="$emit('update:modelValue', false)"
            >x</div>
            <div class="title">
                <slot name="title" />
            </div>
            
            <slot />
            <slot name="footer" />
            
        </div>
    </div>
    
</template>

<style lang="less" scoped>
.main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
     .tips {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 100px;
        background-color: #fff;

        .title {
            font-size: 20px;
        }
        .x {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #f40;
            cursor:pointer;
        }
    }
}
   
</style>