<script setup>
defineProps({
    total: {
        type: Number,
        default: 5,
    },
    moldeValue: {
        type: Number,
        default: 0,
    }
})
</script>

<template>
    <div class="main">
        <div 
            v-for="(item, ind) in total"
            @click="$emit('update:moldeValue', ind)"
        >
            <slot name="star">
            </slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    display: flex;

    div { 
        margin: 8px;
    }
}
</style>