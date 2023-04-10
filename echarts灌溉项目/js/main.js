import p from '../imgs/chart.js';

console.log(p)

// 气象指标
// 今天温度
$('#temp-today').text(weather.today.temperature);
// 今天天气
$('#weather-today').text(weather.today.weather);
// 明天温度
$('#temp-tomorrow').text(`明天 ${weather.tomorrow.temperature}`);
// 后天温度
$('#temp-after-tomorrow').text(`后天 ${weather.tomorrow.temperature}`);
// pm2.5
$('#pm25').text(weather.today.pm25);
// 光照强度
$('#light-intensity').text(weather.today.lightIntensity);
// 湿度
$('#humidity').text(weather.today.humidity);
// 气压
$('#pressure').text(weather.today.pressure);


// 土壤详情
// 土壤温度
$('#soil-temp').text(soilMoisture.temperature);
// 土壤湿度
$('#soil-humidity').text(soilMoisture.humidity);
// 土壤导电率
$('#soil-conductivity').text(soilMoisture.conductivity);
// 土壤酸碱度
$('#soil-ph').text(soilMoisture.ph);



// 消息占比
// 消息数据
// $('#danger-done').text((messagesdata.filter(d => {d.type === 'danger' && d.status === 'done'})).length);


// 设备状态列表
function createDeviceStatusList(data) {
    const parent = $('.device-status');
    for (let i = 0; i < data.length; i += 2) {
        const item1 = data[i];
        const item2 = data[i + 1] || '';
        const row = $(`
            <div class="row">
                <div class="item">
                    ${item1.name}
                    <span ${item1.status === '灌溉中' ? 'class="active"' : ''}>
                        <i class="icon iconfont icon-dakaqiandao"></i>
                        ${item1.status}
                    </span>
                </div>
                ${item2 && `
                    <div class="item">
                        ${item2.name}
                        <span ${item2.status === '灌溉中' && 'class="active"'}>
                            <i class="icon iconfont icon-dakaqiandao"></i>
                            ${item2.status}
                        </span>
                    </div>
                `}
            </div>
        `);
        row.appendTo(parent);
    }
}

createDeviceStatusList(deviceWater);

// 设备状态占比
function createDeviceStatusRate(data) {
    // 1.
    const instance = echarts.init(document.querySelector('#device-status-rate'));
    // 2 & 3.
    instance.setOption({
        title: {
            text: '设备状态占比',
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            left: 8,
        },
        color: ['#6972c6', '#2f3b7b'],
        // 图例
        legend: {
            top: 24,
            left: 8,
            textStyle: {
                color: '#fff',
            },
            itemWidth: 12,
            itemHeight: 12,
            orient: 'vertical',
            align: 'right',
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '100%'],
                center: ['75%', '50%'],
                roseType: 'radius',
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: data.reduce((prev, current) => {
                    const finded = prev.find(p => p.name === current.status);

                    if (!finded) {
                        prev.push({ value: 1, name: current.status });
                    } else {
                        finded.value++;
                    }

                    return prev;
                }, []),
            },
        ]
    });

    const rate = (data.filter(d => d.status === '灌溉中').length * 100 / data.length).toFixed(0);
    $('#device-status-rate-value').text(`${rate}%`);
}

createDeviceStatusRate(deviceWater);

// 空气温度/湿度
function createAirTemp(data) {

    data.sort((a, b) => a.timestamp - b.timestamp);

    const maxTemperature = Math.max(...data.map(d => d.temperature));

    const instance = echarts.init(document.querySelector('#air-temp'));
    instance.setOption({
        tooltip: {
            trigger: 'axis',
            formatter: `<img src="${p}">{a0}: {c0}°C<br /><img src="${p}">{a1}: {c1}%`,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            textStyle: {
                color: '#fff',
            },
        },
        grid: {
            height: "50%",
        },
        legend: {
            right: '20%',
            textStyle: {
                color: '#fff',
            },
            icon: 'path://M 6,10 A 6 4 10 1 0 14,10',
        },
        color: ['#3e7cb8', '#8d64d2', 'rgba(255, 255, 255, .02)'],
        xAxis: {
            type: 'category',
            data: data.map(d => dayjs(d.timestamp).format('HH:mm')),
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: '#7c84b8',
            },
        },
        yAxis: [
            {
                type: 'value',
                name: '温度(°C) ',
                position: 'left',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#7c84b8',
                },
                nameTextStyle: {
                    color: '#7c84b8',
                    align: 'right',
                },
            },
            {
                type: 'value',
                name: ' 湿度(%)',
                position: 'right',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#7c84b8',
                },
                nameTextStyle: {
                    color: '#7c84b8',
                    align: 'left',
                },
            },
        ],
        series: [
            {
                name: '温度',
                type: 'line',
                yAxisIndex: 0,
                data: data.map(d => d.temperature),
                smooth: true,
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 8,
                    shadowOffsetY: 4,
                },

            },
            {
                name: '湿度',
                type: 'line',
                yAxisIndex: 1,
                data: data.map(d => d.humidity),
                smooth: true,
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 8,
                    shadowOffsetY: 4,
                },
            },
            {
                type: 'bar',
                yAxisIndex: 0,
                data: data.map(() => maxTemperature),
                barWidth: '90%',
                emphasis: {
                    itemStyle: {
                        color: 'rgba(255, 255, 255, .1)',
                    },
                },
            },
        ]
    });
}

createAirTemp(airTemperature);

// 土壤温度/湿度 
function soilAirTemp(data) {
    data.sort((a, b) => a.timestamp - b.timestamp);
    // 1
    const instance = echarts.init(document.querySelector('#soil-chart'));
    // 2 3
    instance.setOption({
        color: ['#505aa6', '#505aa6'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            height: "50%",
        },
        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: ['line', 'bar'] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        legend: {
            right: '20%',
            textStyle: {
                color: '#fff',
            },
            icon: 'rect',
        },
        xAxis: [
            {
                type: 'category',
                data: data.map(d => dayjs(d.timestamp).format('HH:mm')),
                // axisPointer: {
                //   type: 'shadow'
                // },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '温度(°C)',
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#7c84b8',
                },
                nameTextStyle: {
                    color: '#7c84b8',
                    align: 'right',
                },
                nameTextStyle: {
                    align: 'left',
                },
            },
            {
                type: 'value',
                name: '湿度(%)',
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                },
                axisLabel: {
                    color: '#7c84b8',
                },
                nameTextStyle: {
                    color: '#7c84b8',
                    align: 'right',
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#222952'],
                    },
                },
                nameTextStyle: {
                    align: 'left',
                },
            }
        ],
        series: [
            {
                name: '温度',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: data.map(d => d.temperature),
                barWidth: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#5f69b9' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#5f69b9' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            {
                name: '湿度',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' °C';
                    }
                },
                data: data.map(d => d.humidity),
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 1)',
                },
                color: ['#5b4590'],
            }
        ]
    });
}
soilAirTemp(soilTemperature);


// 消息占比
function messagesRatio(data) {
    // 已处理
    const done = data.filter(d => d.type === 'danger' && d.statuss === 'done')
    $('#danger-done').text(done.length);

    // 未处理
    const undo = data.filter(d => d.type === 'danger' && d.statuss === 'undo');
    $('#danger-undo').text(undo.length);

    // 总数 
    const count = data.filter(d => d.type === 'danger');
    $('danger-count').text(count.length);
    // 1.
    const instance = echarts.init(document.querySelector('#msg-rate-danger'));

    // 2 & 3.
    instance.setOption({
        title: {
            text: '报警消息占比',
            textStyle: {
                color: '#787db2',
                fontSize: 12,
            },
            left: 8,
        },
        color: ['#626dd3', '#424ea6', '#1e2454'],
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['75%', '50%',],
                roseType: 'radius',
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: done.length, name: '已处理' },
                    { value: undo.length, name: '未处理' },
                    { value: count.length, name: '总个数' },
                ]
            },
        ]
    });

    // 消息占比（百分比）
    const num = (data.filter(d => d.type === 'danger').length * 100 / data.length).toFixed(0);
    $('#msg-rate-danger-num').text(`${num}%`);
}

messagesRatio(messages);

// 消息提醒
function createMsgTip(data) {
    // 把每条数据都要添加到list里面，多个item，需要遍历原数据
    const list = $('#msg-tip-list');
    // 创建之前需要先清空一下，因为展示信息需要根据点击的tab来
    list.html('');
    for (const d of data) {
        // 给要添加到list里面的数据，建一个div
        const el = $(`
        <div class="item ${d.type}">
            <!-- 图标 -->
            ${d.type === 'danger' ? '<i class="icon iconfont icon-dakaqiandao"></i>' : ''}
            ${d.type === 'warning' ? '<i class="icon iconfont icon-tuandui"></i>' : ''}
            ${d.type === 'info' ? '<i class="icon iconfont icon-dakaqiandao"></i>' : ''}
            <!-- 右侧内容 -->
            <div class="content">
                <div class="info-title">
                    <span>${d.title}</span>
                    <span>${dayjs(d.timestamp).format('YYYY-MM-DD HH:mm')}</span>
                </div>
                <!-- 信息内容 -->
                <div class="info-content">
                    ${d.content}
                </div>
            </div>
        </div>
        `);
        // 把标签添加到父元素
        el.appendTo(list);
    }
}
createMsgTip(messages);

// 需要把消息提醒tab绑定事件
function bindMsgTipEvents(messages) {
    // jq绑定点击事件
    $('.tab').on('click', function () {
        // this 就是所点击的标签
        console.log($(this).attr('type'));
        // 点击的标签添加 active 属性
        $(this).addClass('active');
        // 其他兄弟标签取消 active 属性
        $(this).siblings().removeClass('active');

        // 点击的时候，对应的消息提醒数据需要重新渲染
        let data = [];
        switch ($(this).attr('type')) {
            case 'all':
                data = messages;
                break;
            case 'danger':
                data = messages.filter(m => m.type === 'danger');
                break;
            case 'warning':
                data = messages.filter(m => m.type === 'warning');
                break;
            case 'other':
                data = messages.filter(m => m.type !== 'danger' && m.type !== 'warning');
                break;
            default:
                break;
        }
        createMsgTip(data)
    })
}
bindMsgTipEvents(messages);