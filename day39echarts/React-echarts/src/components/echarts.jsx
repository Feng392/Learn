import React from "react";
import * as echarts from "echarts";
import "./echarts.css";
import { useEffect } from "react";

let myChart = null;
export default (props) => {
  const { option } = props;
  console.log("echarts.jsx props.option:", props.option);

  useEffect(() => {
    if (myChart === null) {
      myChart = echarts.init(document.querySelector(".echarts"));
    }
    myChart.setOption(option);
  }, [option]);

  return <div className="echarts"></div>;
};