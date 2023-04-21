import axios from "axios";
// 需要配置router

// 路由跳转 (只适用于函数组件)
// import { useNavigate } from 'react-router-dom';
// const nav = useNavigate();
const req = axios.create({
  baseURL: "/api",
});

// 请求拦截器
req.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 如果有token，就携带token
    if (sessionStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${sessionStorage.getItem(
        "token"
      )}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
req.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    // 如果是401，就跳转到登录页
    if (error.response.status === 401) {
      console.log("401");
    }
    return Promise.reject(error);
  }
);
export default req;