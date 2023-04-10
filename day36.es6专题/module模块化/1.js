const a = 1;
const c = 3;
// 导出a
export {
    a,
    // 默认导出 方法二
    // 456 as default;
}

export const b = 2;

export function fn() {
    console.log(123);
}

// console.log(b);
// 默认导出
export default 456;
