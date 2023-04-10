interface Item53 {
  username: string;
  starCount: number;
  content: string;
}

interface Person53 {
  starCount: {
    zhangsan: number;
    lisi: number;
    wangwu: number;
  };
  commentCount: {
    zhangsan: number;
    lisi: number;
    wangwu: number;
  };
}

const input53: Item53[] = [
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
const output: Person53 = {
  starCount: {
    zhangsan: 22,
    lisi: 221,
    wangwu: 6
  },
  commentCount: {
    zhangsan: 2,
    lisi: 2,
    wangwu: 1
  }
};

// 取值型函数
function getTotal53(input53: Item53[]): object;
// 函数的具体实现
function getTotal53(input53) {
    const output53 = {
      starCount: {},
      commentCount: {}
    };
    for (const { username, starCount, content } of input53) {
      if (!output53.starCount[username]) {
        output53.starCount[username] = 0;
      }
      if (!output53.commentCount[username]) {
        output53.commentCount[username] = 0;
      }
      output53.starCount[username] += starCount;
      output53.commentCount[username]++;
    }
    return output53;
};

const obj53 = getTotal53(input53);