import uxios from './uxios.js';
const req = uxios.create(
{
	baseURL: 'https://consult-api.itheima.net',
});
// 请求拦截
req.interceptors.request.use(conf =>
{
	return {
		...conf,
		headers:
		{
			...conf.headers,
			Authorization: 'Bearer ' + uni.getStorageSync('token'),
		},
	};
});
// 响应拦截
req.interceptors.response.use(
	res => res,
	err =>
	{
		// 401跳转登录页
		switch (err.xxx)
		{
			case 401:
				uni.navigateTo(
				{
					url: '/pages/login/index',
				});
		}
		return err;
	},
);
export default req;