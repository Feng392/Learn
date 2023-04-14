import React from "react";
import "./App.css";
import Echarts from "./components/echarts";

function App() {
  const [option, setOption] = React.useState({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
  setTimeout(() => {
    setOption({
      ...option,
      series: [
        {
          ...option.series[0],
          data: option.series[0].data.map(() =>
            Math.floor(Math.random() * 100)
          ),
        },
      ],
    });
  }, 1000);

  return (
    <div className="App">
      <Echarts option={option} />
    </div>
  );
}

export default App;