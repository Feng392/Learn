import p from '../imgs/chart.js.js';

console.log(p)

// 气象指标
// 今天温度
$('#temp-today').text(weather.today.temperature);
// 今天天气
$('#weather-today').text(weather.today.weather);
// 明天温度
$('#temp-tomorrow').text(`明天 ${ weather.tomorrow.temperature }`);
// 后天温度
$('#temp-after-tomorrow').text(`后天 ${ weather.tomorrow.temperature }`);
// pm2.5
$('#pm25').text(weather.today.pm25);
// 光照强度
$('#light-intensity').text(weather.today.lightIntensity);
// 湿度
$('#humidity').text(weather.today.humidity);
// 气压
$('#pressure').text(weather.today.pressure);

// 设备状态列表
function createDeviceStatusList(data) {
    const parent = $('.device-status');
    for (let i = 0; i < data.length; i += 2) {
        const item1 = data[i];
        const item2 = data[i + 1] || '';
        const row = $(`
            <div class="row">
                <div class="item">
                    ${ item1.name }
                    <span ${ item1.status === '灌溉中' ? 'class="active"' : '' }>
                        <i class="icon iconfont icon-dakaqiandao"></i>
                        ${ item1.status }
                    </span>
                </div>
                ${ item2 && `
                    <div class="item">
                        ${ item2.name }
                        <span ${ item2.status === '灌溉中' && 'class="active"' }>
                            <i class="icon iconfont icon-dakaqiandao"></i>
                            ${ item2.status }
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
    $('#device-status-rate-value').text(`${ rate }%`);
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
            formatter: `<img src="${ p }">{a0}: {c0}°C<br /><img src="${ p }">{a1}: {c1}%`,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            textStyle: {
                color: '#fff',
            },
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
                // symbolSize: 8,
                // symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
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