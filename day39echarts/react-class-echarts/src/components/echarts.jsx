import React from "react";
import * as echarts from "echarts";

// react class 写法

class Echarts extends React.Component {
  // componentDidMount() {
  //   const myChart = echarts.init(document.querySelector(".echarts"));
  //   myChart.setOption(this.props.option);
  // }
  // componentWillReceiveProps
  componentDidUpdate() {
    console.log(this.props.option.series[0]);
    const myChart = echarts.init(document.querySelector(".echarts"));
    myChart.setOption(this.props.option);
  }

  render() {
    return (
      <div
        className={"echarts"}
        style={{
          height: 500,
        }}
      ></div>
    );
  }
}

export default Echarts;

// import React from "react";
// import * as echarts from "echarts";
//
// export default class Computed extends React.Component {
//   // }
//   componentDidUpdate() {
//     const myChart = echarts.init(document.getElementById("main"));
//     myChart.setOption(this.props.option);
//   }
//
//   render() {
//     return <div id="main" style={{ width: 600, height: 400 }}></div>;
//   }
// }