import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Echarts from "./components/echarts";

class App extends React.Component {
  state = {
    option: {
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
    },
  };

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({
        option: {
          ...this.state.option,
          series: [
            {
              ...this.state.option.series[0],
              data: [
                ...this.state.option.series[0].data.map(
                  () => Math.random() * 50
                ),
              ],
            },
          ],
        },
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Echarts option={this.state.option} />
      </div>
    );
  }
}

export default App;