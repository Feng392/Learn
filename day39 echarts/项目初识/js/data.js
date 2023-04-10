// 气象指标
const weather = {
    // 今天
    today: {
        // 最高温度
        temperature: '10°C',
        // 天气
        weather: '晴天',
        // pm2.5
        pm25: '120',
        // 光照强度
        lightIntensity: '1016Klux',
        // 湿度
        humidity: '86%',
        // 气压
        pressure: '1020Pa',
    },
    // 明天
    tomorrow: {
        temperature: '12°C',
        weather: '多云',
        pm25: '110',
        lightIntensity: '1016Klux',
        humidity: '86%',
        pressure: '1020Pa',
    },
    // 后天
    afterTomorrow: {
        temperature: '14°C',
        weather: '阴天',
        pm25: '100',
        lightIntensity: '1016Klux',
        humidity: '86%',
        pressure: '1020Pa',
    },
};

// 设备浇灌
const deviceWater = [
    {
        name: '1号设备',
        status: '灌溉中',
    },
    {
        name: '2号设备',
        status: '未灌溉',
    },
    {
        name: '3号设备',
        status: '灌溉中',
    },
    {
        name: '4号设备',
        status: '未灌溉',
    },
    {
        name: '5号设备',
        status: '未灌溉',
    },
    {
        name: '6号设备',
        status: '灌溉中',
    },
    {
        name: '7号设备',
        status: '未灌溉',
    },
    {
        name: '8号设备',
        status: '未灌溉',
    },
    {
        name: '9号设备',
        status: '灌溉中',
    },
];

// 空气温度/湿度
const airTemperature = [
    {
        timestamp: 1671784778753,
        // 温度
        temperature: 20,
        // 湿度
        humidity: 80,
    },
    {
        timestamp: 1671781178753,
        temperature: 21,
        humidity: 81,
    },
    {
        timestamp: 1671777578753,
        temperature: 22,
        humidity: 82,
    },
    {
        timestamp: 1671773978753,
        temperature: 22,
        humidity: 83,
    },
    {
        timestamp: 1671770378753,
        temperature: 22,
        humidity: 84,
    },
    {
        timestamp: 1671766778753,
        temperature: 21,
        humidity: 83,
    },
    {
        timestamp: 1671763178753,
        temperature: 22,
        humidity: 82,
    },
    {
        timestamp: 1671759578753,
        temperature: 21,
        humidity: 83,
    },
    {
        timestamp: 1671755978753,
        temperature: 22,
        humidity: 81,
    },
    {
        timestamp: 1671752378753,
        temperature: 23,
        humidity: 85,
    },
    {
        timestamp: 1671748778753,
        temperature: 23,
        humidity: 79,
    },
    {
        timestamp: 1671745178753,
        temperature: 25,
        humidity: 81,
    },
    {
        timestamp: 1671741578753,
        temperature: 25,
        humidity: 82,
    },
    {
        timestamp: 1671737978753,
        temperature: 23,
        humidity: 83,
    },
    {
        timestamp: 1671734378753,
        temperature: 21,
        humidity: 81,
    },
    {
        timestamp: 1671730778753,
        temperature: 21,
        humidity: 85,
    },
    {
        timestamp: 1671727178753,
        temperature: 21,
        humidity: 85,
    },
    {
        timestamp: 1671723578753,
        temperature: 22,
        humidity: 87,
    },
    {
        timestamp: 1671719978753,
        temperature: 21,
        humidity: 84,
    },
];

// 土壤墒情
const soilMoisture = {
    // 土壤温度
    temperature: '20°C',
    // 土壤湿度
    humidity: '58%',
    // 土壤导电率
    conductivity: '10S/cm',
    // 土壤酸碱度
    ph: '6.5PH',
};

// 土壤温度/湿度
const soilTemperature = [
    {
        timestamp: 1671784778753,
        // 温度
        temperature: 20,
        // 湿度
        humidity: 80,
    },
    {
        timestamp: 1671781178753,
        temperature: 21,
        humidity: 81,
    },
    {
        timestamp: 1671777578753,
        temperature: 22,
        humidity: 82,
    },
    {
        timestamp: 1671773978753,
        temperature: 22,
        humidity: 83,
    },
    {
        timestamp: 1671770378753,
        temperature: 22,
        humidity: 84,
    },
    {
        timestamp: 1671766778753,
        temperature: 21,
        humidity: 83,
    },
    {
        timestamp: 1671763178753,
        temperature: 22,
        humidity: 82,
    },
    {
        timestamp: 1671759578753,
        temperature: 21,
        humidity: 83,
    },
    {
        timestamp: 1671755978753,
        temperature: 22,
        humidity: 81,
    },
    {
        timestamp: 1671752378753,
        temperature: 23,
        humidity: 85,
    },
    {
        timestamp: 1671748778753,
        temperature: 23,
        humidity: 79,
    },
    {
        timestamp: 1671745178753,
        temperature: 25,
        humidity: 81,
    },
    {
        timestamp: 1671741578753,
        temperature: 25,
        humidity: 82,
    },
    {
        timestamp: 1671737978753,
        temperature: 23,
        humidity: 83,
    },
    {
        timestamp: 1671734378753,
        temperature: 21,
        humidity: 81,
    },
    {
        timestamp: 1671730778753,
        temperature: 21,
        humidity: 85,
    },
    {
        timestamp: 1671727178753,
        temperature: 21,
        humidity: 85,
    },
    {
        timestamp: 1671723578753,
        temperature: 22,
        humidity: 87,
    },
];

// 消息提醒
const messages = [
    {
        timestamp: 1671784778753,
        // 消息类型(用于渲染不同的图标)
        type: 'danger',
        // 消息标题
        title: '报警信息',
        // 消息内容
        content: '1号设备无法启动',
        // 处理状态(done: 已处理, undo: 未处理)
        status: 'done',
    },
    {
        timestamp: 1671781178753,
        type: 'info',
        title: '周报提交提醒',
        content: '2022年第50周周报请于本周五提交',
        status: 'undo',
    },
    {
        timestamp: 1671777578753,
        type: 'warning',
        title: '1号设备点亮还剩20%，尽快充电',
        content: '1号设备点亮还剩20%，尽快充电',
        status: 'undo',
    },
    {
        timestamp: 1671773978753,
        type: 'danger',
        title: '报警信息',
        content: '4号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671770378753,
        type: 'danger',
        title: '报警信息',
        content: '5号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671766778753,
        type: 'danger',
        title: '报警信息',
        content: '6号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671763178753,
        type: 'danger',
        title: '报警信息',
        content: '7号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671759578753,
        type: 'danger',
        title: '报警信息',
        content: '8号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671755978753,
        type: 'warning',
        title: '报警信息',
        content: '9号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671752378753,
        type: 'danger',
        title: '报警信息',
        content: '10号设备无法启动',
        status: 'undo',
    },
    {
        timestamp: 1671748778753,
        type: 'warning',
        title: '报警信息',
        content: '11号设备无法启动',
        status: 'undo',
    },
    {
        timestamp: 1671745178753,
        type: 'danger',
        title: '报警信息',
        content: '12号设备无法启动',
        status: 'undo',
    },
    {
        timestamp: 1671741578753,
        type: 'danger',
        title: '报警信息',
        content: '13号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671737978753,
        type: 'danger',
        title: '报警信息',
        content: '14号设备无法启动',
        status: 'done',
    },
    {
        timestamp: 1671734378753,
        type: 'danger',
        title: '报警信息',
        content: '15号设备无法启动',
        status: 'done',
    },
];

// 消息占比数据应由消息提醒数据计算得出