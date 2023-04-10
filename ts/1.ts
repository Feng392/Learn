// 基础数据类型
let n: number = 1;
// n = "hello";

let b = false;

let str = 'hello';



// 引用数据类型
// 1. array
const arr: number[] = [1, 2, 3, 4] 
// 元组
const arr1: [number, number] = [1, 2];
const arr2: [number, number][] = [
    [1, 2],
    [1, 2],
    [1, 2],
];
// 类型变量
// 定义类型变量 要大驼峰
type Ns = number | string;
let a: Ns = 2;
let aa: Ns = '2';
// const arr3: [number, number | string][] = [
//     [1, 2],
//     [1, 2],
//     [1, '2'],
// ];
const arr3: [number, Ns][] = [
    [1, 2],
    [1, 2],
    [1, '2'],
];
const arr4: [number, number, number?, number?][] = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
]

// 2. object
type Sex = '男' | '女';
interface Person {
    name: string;
    age?: number;
    sex: Sex;
};

const person: Person = {
    name: 'zs',
    age: 18,
    sex: '男'
};

interface Item {
    id: number;
    value: string;
}

const list: Item[] = [
    { id: 1, value: 'aaa' },
    { id: 2, value: 'bbb' },
    { id: 3, value: 'ccc' },
];


// 泛型（类型的形参）（面试题）
type Tuple<t> = [t, t];
const arr5: Tuple<number> = [1, 2];
const arr6: Tuple<string> = ['1', '2'];
const arr7: Tuple<Sex> = ['男', '女'];

// 函数
// 1. 执行型: void函数
function fn(x: string, y?: number): void; 
function fn(x, y) {
    console.log(x);
}
fn('hello');

// 2.取值型
function getMax(num: number[]): number;
// 函数的具体实现
function getMax(num) {
    return Math.max(...num);
}
const max = getMax([1, 2, 3, 4]);
