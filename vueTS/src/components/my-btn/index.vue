<script setup lang="ts">

type BtnTheme = 'primary' | 'danger' | 'warning';
type BtnSize = 'mini' | 'small' | 'normal' | 'large';
interface BtnProps {
    type: BtnTheme,
    size: BtnSize,
    round: boolean,
    color: string,
}

// defineProps<BtnProps>();

// 带有默认值的 props
withDefaults(defineProps<BtnProps>(), {
    type: 'primary',
    size: 'normal',
    round: true,
    color: '#f40',
});

// 定义事件
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
    <button
        class="btn"
        :class="`${type} ${size} ${round ? round : ''}`"
        :style="{color}"
        @click="emit('click', $event)"
    >
        <slot />
    </button>
</template>

<style lang="less" scoped>
.btn {
    display: inline-block;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .primary {
    background-color: #409eff;
  }

  .danger {
    background-color: #f56c6c;
  }

  .warning {
    background-color: #e6a23c;
  }

  .mini {
    padding: 0 10px;
    font-size: 12px;
  }

  .small {
    padding: 0 15px;
    font-size: 14px;
  }

  .normal {
    padding: 0 20px;
    font-size: 16px;
  }

  .large {
    padding: 0 25px;
    font-size: 18px;
  }

  .round {
    border-radius: 20px;
  }
</style>