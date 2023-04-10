type Status52 = 'online' | 'offline';
interface Item52 {
  wxNickName: string;
  nickName: string;
  status: Status52;
  duration: number; // 正在游戏的游戏时长: 301241毫秒
  lastLoginTimestamp: number; // 上次登录截止时间
};

interface Person52 {
  online: [string, string];
  offline: [string, string];
}

const input52: Item52[] = [
  {
    wxNickName: '张三',
    nickName: '寡人死一次就挂机',
    status: 'online',
    duration: 301241, // 正在游戏的游戏时长: 301241毫秒
    lastLoginTimestamp: 1642940476563 // 上次登录截止时间
  },
  {
    wxNickName: '李四',
    nickName: '苏州科技大学',
    status: 'offline',
    duration: 0,
    lastLoginTimestamp: 1642940126563
  },
  {
    wxNickName: '王五',
    nickName: 'hide on bush',
    status: 'online',
    duration: 225382,
    lastLoginTimestamp: 1642940123000
  },
  {
    wxNickName: '刘六',
    nickName: 'Uz1',
    status: 'offline',
    duration: 0,
    lastLoginTimestamp: 1642940517000
  }
];

const output52: Person52 = {
  online: ['111', '王五'],
  offline: ['222', '刘六']
};

// 取值型函数
function getResult52(input52: Item52[]): object;
// 函数的具体实现
function getResult52(input52) {
  return input52.reduce(
    (prev, { wxNickName, status }) => {
      if (status === 'online') {
        prev.online.push(wxNickName);
      } else {
        prev.offline.push(wxNickName);
      }
      return prev;
    },
    { online: [], offline: [] }
  );
}
const obj52 = getResult52(input52);
