type Status = 'online' | 'offline';

interface Item51 {
  wxNickName: string;
  nickName: string;
  status: Status;
  duration: number; // 正在游戏的游戏时长: 301241毫秒
  lastLoginTimestamp: number; // 上次登录截止时间
}

interface Person51 {
  online: [string, string];
  offline: [string, string];
}

const input51: Item51[] = [
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

const output51: Person51 = {
  online: ['张三', '王五'],
  offline: ['刘六', '李四']
};

// 取值型函数
function getResult51(input51: Item51[]): object;
// 函数的具体实现
function getResult51(input51) {
  return input51
    .sort((a, b) => b.lastLoginTimestamp - a.lastLoginTimestamp)
    .reduce(
      (prev, { wxNickName, duration }) => {
        if (duration) {
          prev.online.push(wxNickName);
        }
        if (!duration) {
          prev.offline.push(wxNickName);
        }
        return prev;
      },
      { online: [], offline: [] }
    );
}

const obj51 = getResult51(input51);