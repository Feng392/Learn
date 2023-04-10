<script setup lang="ts">
// 定义类型
type CardShadow = 'always' | 'never' | 'hover';
type width = 'width1' | 'width2' | 'width3';
type height = 'height1' | 'height2' | 'height3';
type bg = 'gb33' | 'bg66' | 'bg99';

interface CSSProperties {
    width: width,
    height: height,
    bg: bg,
}

interface CardProps {
    header: string,
    shadow: CardShadow,
    bodyStyle: CSSProperties,
}
// defineProps<CardProps>();
// 带有默认值的 props
withDefaults(defineProps<CardProps>(), {
    header: '1111',
    shadow: 'always',
    bodyStyle: () => {one: 'one'},
});
</script>

<style lang="less" scoped>
.width1 {
    width: 50px;
}
.width2 {
    width: 100px;
}
.width3 {
    width: 100px;
}
</style>