import React, { useEffect } from "react";
// 提供connect装饰者函数 该函数可以把《页面组件》变成《注入了store数据的页面组件》
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
// 引入我们之前写好的action函数
import {
  getHomeBanner,
  getHomeHead,
  getHomeHotBrand,
} from "@/store/home/action";

export default function () {
  const homeData = useSelector<RootState, any>(
    (state) => state.homeReducer.head
  );
  const brand = useSelector<RootState, any>((state) => state.homeReducer.brand);
  const dispatch = useDispatch();

  // mounted
  useEffect(() => {
    // 页面初始化时触发发请求
    // 用action函数生成action
    getHomeHead()(dispatch);
    getHomeHotBrand(6)(dispatch);
    getHomeBanner(1)(dispatch);
  }, []);

  return (
    <div>
      <ul>
        {homeData.map((item: any) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div>
        {brand.map((item: any) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      <div>
        {brand.map((item: any) => {
          return <div key={item.id}>{<img src={item.imgUrl} alt="" />}</div>;
        })}
      </div>
    </div>
  );
}