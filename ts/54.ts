interface Item54 {
  username?: string;
  starCount: number;
  content: string;
};

interface output54 {
  zhangsan: [Item54, Item54?];
  lisi: [Item54, Item54?];
  wangwu: [Item54, Item54?];
}

const input54: Item54[] = [
  {
    username: 'zhangsan',
    starCount: 10,
    content: '嘻嘻嘻'
  },
  {
    username: 'lisi',
    starCount: 122,
    content: '嘿嘿'
  },
  {
    username: 'lisi',
    starCount: 99,
    content: '呵呵'
  },
  {
    username: 'zhangsan',
    starCount: 12,
    content: '哈哈哈'
  },
  {
    username: 'wangwu',
    starCount: 6,
    content: '嗯嗯'
  }
];
const output54: output54 = {
  zhangsan: [
    {
      starCount: 12,
      content: '哈哈哈'
    },
    {
      starCount: 10,
      content: '嘻嘻嘻'
    }
  ],
  lisi: [
    {
      starCount: 122,
      content: '嘿嘿'
    },
    {
      starCount: 99,
      content: '呵呵'
    }
  ],
  wangwu: [
    {
      starCount: 6,
      content: '嗯嗯'
    }
  ]
};

// 取值函数
function getTotal54(input54: Item54[]): object;
// 函数的具体实现
function getTotal54(input54) {
  return input54.reduce((prev, { username, starCount, content }) => {
    if (!prev[username]) {
      prev[username] = [];
    }
    if (username === username) {
      prev[username].push({
        starCount,
        content
      });
    }
    return prev;
  }, {});
};

const obj54 = getTotal54(input54);