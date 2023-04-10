// 引入axios
import axios from 'axios'
import router from './router';


const req = axios.create({
  baseURL: '/api',
});
// http request拦截器 添加一个请求拦截器
req.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `'Bearer' ${localStorage.getItem('token')}` || '',
      },
    };
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
req.interceptors.response.use(
  (res) => {
    // 如果有status字段，说明不是我写的 直接透传res
    if (res.data.status) {
      return res;
    }
    // 如果 success为false或者 undefined 让它走到假的里面
    if (!res.data.success) {
      // 把后端给的错误信息，传递给下一个catch
      return Promise.reject(res.data.message);
    }
    return res;
  },
  (error) => {
    // 如果报错401，就跳转到登录页面
    switch (error.response.status) {
    case 401:
      // 跳转到登录页
      router.push('/login');
      break;

    default:
      break;
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default req;