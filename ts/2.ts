type Status = 'online' | 'offline';
interface Item2 {
    wxNickName: string;
    nickName: string;
    status: string;
    duration: number | string;
    lastLoginTimestamp: number | string;
    rankScore: number;
}

const input: Item2[] = [
    {
        wxNickName: '张三',
        nickName: '寡人死一次就挂机',
        status: 'online',
        duration: 301241, // 正在游戏的游戏时长: 301241毫秒
        lastLoginTimestamp: 1642940476563, // 上次登录截止时
        rankScore: 1234, // 排位分数
    },
]