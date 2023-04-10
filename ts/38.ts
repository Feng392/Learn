interface InpItem {
    username: string;
    starCount: number;
    content: string;
    timestamp: number
    replies: InpItem[];
}

const arr38: InpItem[] = [
     {
        username: 'zhangsan',
        starCount: 10,
        content: '感觉不会再爱了',
        timestamp: 1642579353575,
        replies: [
            {
                username: 'lisi',
                starCount: 3,
                content: '感觉不会再爱了',
                timestamp: 1642579354575,
                replies: [],
            },
            {
                username: 'wangwu',
                starCount: 3,
                content: '感觉不会再爱了',
                timestamp: 1642579355575,
                replies: [
                    {
                        username: 'liuliu',
                        starCount: 1,
                        content: '感觉不会再爱了',
                        timestamp: 1642579357575,
                        replies: [],
                    },
                ],
            },
        ],
    },
]