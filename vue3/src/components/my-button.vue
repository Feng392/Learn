<script setup>

defineProps({
    color: {
        type: String,
        default: '#f40',
    }
});

defineEmits([
    'abc',
    'efc',
])
</script>

<template>
    <button
        :style="{ color }"
        @click="$emit('abc', $event)
        "
    >
        <!-- 具名插槽 -->
        <slot name="prefix"/>
        <slot />
    </button>
</template>