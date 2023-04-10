// 柱状图
function grtBar() {
    // 基于准备好的dom，初始化echarts实例
    const bar = echarts.init(document.querySelector('.bar'));

    // 指定图表的配置项和数据
    const option = {
        title: {
            text: '柱状图图事例',
            textStyle: {
                color: '#9b9ea3',
                fontSize: 14,
            },
            left: 34,
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            axisPointer: {
                type: 'none',
            },
            textStyle: {
                color: '#fff',
            },
        },
        xAxis: {
            type: 'category',
            // 坐标轴名称隐藏
            axisLabel: {
                show: false,
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            // 分隔线 
            splitLine: {
                lineStyle: {
                    color: '#31343d',
                    type: [8, 8],
                },
            },
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.1)'
                },
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#e14e9d' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#2e196c' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                barWidth: 20,
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    bar.setOption(option);
}
grtBar();



// 折线图
function getLine() {
    // 基于准备好的dom，初始化echarts实例
    const line = echarts.init(document.querySelector('.line'));

    // 指定图表的配置项和数据
    const option = {
        color: ['#5836dc', '#7839dc', '#c65992'],
        // 标题
        title: {
            text: '折线图事例',
            textStyle: {
                color: '#9b9ea3',
                fontSize: 14,
            },
            left: 34,
        },
        // 提示框
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            axisPointer: {
                type: 'none',
            },
            textStyle: {
                color: '#fff',
            },
        },
        xAxis: {
            type: 'category',
            min: 'dataMin',
            max: 'dataMax',
            // boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false,
            },
            // 坐标轴名称隐藏
            axisLabel: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            // 分隔线 
            splitLine: {
                lineStyle: {
                    color: '#31343d',
                    type: [8, 8],
                },
            },
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                itemStyle: {
                    color: '#5836dc',
                },
                lineStyle: {
                    shadowBlur: 6,
                    shadowColor: '#5836dc',
                    shadowOffsetY: 2,
                },
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                itemStyle: {
                    color: '#7839dc',
                },
                lineStyle: {
                    shadowBlur: 6,
                    shadowColor: '#7839dc',
                    shadowOffsetY: 2,
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                itemStyle: {
                    color: '#c65992',
                },
                lineStyle: {
                    shadowBlur: 6,
                    shadowColor: '#c65992',
                    shadowOffsetY: 2,
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    line.setOption(option);
}
getLine();


// 面积图
function getArea() {
    // 基于准备好的dom，初始化echarts实例 
    const area = echarts.init(document.querySelector('.area'));

    // 指定图表的配置项和数据
    const option = {
        color: ['#1a6def'],
        title: {
            text: '面积图事例',
            textStyle: {
                color: '#9b9ea3',
                fontSize: 14,
            },
            left: 34,
        },
        // 提示框
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            axisPointer: {
                type: 'none',
            },
            textStyle: {
                color: '#fff',
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#31343d',
                    type: [8, 8],
                },
            },
        },
        series: [
            {
                data: [0, 932, 901, 1400, 1000, 800, 0],
                type: 'line',
                itemStyle: {
                    color: '#1a6def',
                },
                lineStyle: {
                    shadowBlur: 6,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffsetY: 3,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#0d4a95' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1c1f28' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表
    area.setOption(option);
};
getArea();


// 饼图

// 饼图first
function getPieFirst() {
    // 基于准备好的dom，初始化echarts实例 
    const pieFirst = echarts.init(document.querySelector('.pie-first'));

    // 指定图表的配置项和数据
    const option = {
        color: ['#592ff5', '#7f33ef', '#e54c9e',],
        title: {
            text: '饼图事例',
            textStyle: {
                color: '#9b9ea3',
                fontSize: 14,
            },
            left: 34,
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            axisPointer: {
                type: 'none',
            },
            textStyle: {
                color: '#fff',
            },
            // 将提示框限制在图表内
            confine: true,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    {
                        value: 1048,
                        name: 'A',
                        // 数据标签样式
                        label: {
                            fontFamily: 'Microsoft YaHei',
                            fontStyle: 'normal',
                            backgroundColor: 'transparent',
                            color: '#fff',
                        },
                    },
                    {
                        value: 735, name: 'B', label: {
                            fontFamily: 'Microsoft YaHei',
                            fontStyle: 'normal',
                            backgroundColor: 'transparent',
                            color: '#fff',
                        },
                    },
                    {
                        value: 580, name: 'C', label: {
                            fontFamily: 'Microsoft YaHei',
                            fontStyle: 'normal',
                            backgroundColor: 'transparent',
                            color: '#fff',
                        },
                    },
                ],
                labelLine: {
                    lineStyle: {
                        color: '#74777c',
                    },
                },
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#1c1f28',
                    shadowBlur: 6,
                    shadowOffsetX: -4,
                    shadowOffsetY: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表
    pieFirst.setOption(option);
};
getPieFirst();

// 饼图second
function getPieSecond() {
    // 基于准备好的dom，初始化echarts实例 
    const pieSecond = echarts.init(document.querySelector('#pie-second'));

    // 指定图表的配置项和数据
    const option = {
        color: ['#592ff5', '#7f33ef', '#e54c9e',],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            axisPointer: {
                type: 'none',
            },
            textStyle: {
                color: '#fff',
            },
            // 将提示框限制在图表内
            confine: true,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 100,
                    borderColor: '#1c1f28',
                    borderWidth: 1,
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
                label: {
                    show: false,
                    //   position: 'center'
                },
                // emphasis: {
                //   label: {
                //     show: true,
                //     fontSize: 40,
                //     fontWeight: 'bold'
                //   }
                // },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 300, name: 'Videod' }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    pieSecond.setOption(option);
}
getPieSecond();

// 饼图third
function getPieThird() {
    // 基于准备好的dom，初始化echarts实例 
    const pieThird = echarts.init(document.querySelector('#pie-third'));

    // 指定图表的配置项和数据
    const option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderWidth: 0,
            axisPointer: {
                type: 'none',
            },
            textStyle: {
                color: '#fff',
            },
            // 将提示框限制在图表内
            confine: true,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    backgroundColor: '#30333c',
                    borderRadius: 100,
                    borderColor: '#1c1f28',
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
                label: {
                    show: false,
                    //   position: 'center'
                },
                // emphasis: {
                //   label: {
                //     show: true,
                //     fontSize: 40,
                //     fontWeight: 'bold'
                //   }
                // },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: 90, name: 'Direct',
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: '#592ff5' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: '#35d1ee' // 100% 处的颜色
                                    }],
                                global: false // 缺省为 false
                            }
                        }
                    },
                    {
                        value: 10,
                        name: 'Email',
                        itemStyle: {
                            color: 'transparent',
                        },
                    },
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    pieThird.setOption(option);
}
getPieThird();

