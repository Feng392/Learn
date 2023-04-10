interface Person55 {
  name: string;
  id: number;
}

const input55: Person55 = {
  name: 'zhangsan',
  id: 13
};
// 取值型函数
function transform55(input55: Person55);
function transform55(input55) {
  const name = input55.split('/').at(-2);
  const id = input55.split('/').at(-1);
  return { name, id };
}

const obj55 = transform55(input55);
