import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/assets/styles/main.scss";
import router from "@/router";
// 国际化
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";

import { Provider } from "react-redux"; // 这里
import store from "./store"; // 这里

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
);