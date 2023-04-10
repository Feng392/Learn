// 单个订单项
interface OrdersItem {
  userCount: number;
  total: number;
  score?: number;
  timestamp: number;
}

interface InputItem {
  name: string;
  orders: OrdersItem[];
}

const arr32: InputItem[] = [
  {
    name: '川哥大碗面',
    // order: 订单
    orders: [
      {
          // 用餐人数
          userCount: 3,
          // 订单消费
          total: 151,
          // 订单分数 不评分默认5分
          score: 4,
          // 时间戳
          timestamp: 1670161228017,
      },
      {
          userCount: 1,
          total: 89,
          score: 4.5,
          timestamp: 1670161228017,
      },
      {
          userCount: 4,
          total: 188,
          score: undefined,
          timestamp: 1670161228017,
      },
    ],
  },
]