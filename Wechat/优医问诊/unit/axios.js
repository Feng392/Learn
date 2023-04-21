const axios = (function()
{
	let requestInterceptor = null;
	let responseSuccessInterceptor = null;
	let responseFailInterceptor = null;

	function 真正的axios(conf)
	{
		// 执行请求拦截的正确时机
		const newConf = requestInterceptor ?
			requestInterceptor(conf) :
			conf;
		return new Promise((resolve, reject) =>
		{
			uni.request(
			{
				...newConf,
				success: (res) =>
				{
					switch (res.statusCode)
					{
						case 200:
							resolve(res.data);
						case 401:
							reject(res)
					}
					console.log(res);
				},
				fail: (err) =>
				{
					reject(err)
				}
			});
		})
	};
	真正的axios.interceptors = {
		request:
		{
			use(getNewConf)
			{
				// 把getNewConf存起来等着执行
				requestInterceptor = getNewConf;
			},
		},
		response:
		{
			use(getNewRes, getNewErr)
			{
				responseSuccessInterceptor = getNewRes;
				responseFailInterceptor = getNewErr;
			},
		},
	};
	return 真正的axios;
})();
// 请求拦截
axios.interceptors.request.use((conf) =>
{
	return {
		...conf,
		headers:
		{
			...conf.headers,
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOCIsImlhdCI6MTY4MTg4OTQyMywiZXhwIjoxNjgyMDYyMjIzfQ.KgWEDM3VgtaVvACZIbwlWvZj9K-auruosTo0pB1cDNI'
		},
	};
});
// 响应拦截
axios.interceptors.response.use(
	res => res,
	err =>
	{
		// 遇到401跳转
		switch (err.statusCode)
		{
			case 401:
				uni.redirectTo(
				{
					url: '/pages/login/index'
				})
				break;
			default:
				break;
		}
		return err;
	},
);
export default axios;