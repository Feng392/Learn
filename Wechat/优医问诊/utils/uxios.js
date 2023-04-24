import * as R from 'ramda';
const uxios = (function()
{
	let requestInterceptorQuece = [];
	let responseSuccessInterceptor = null;
	let responseFailInterceptor = null;

	function 真正的axios(conf)
	{
		// 执行请求拦截的正确时机
		const newConf = requestInterceptorQuece.length ?
			R.pipe(...requestInterceptorQuece)(conf) : // requestInterceptor: conf >>> newConf
			conf;
		return new Promise((resolve, reject) =>
		{
			uni.request(
			{
				url: newConf.url,
				data: newConf.data,
				method: newConf.method,
				header: newConf.headers,
				success(res)
				{
					const newRes = responseSuccessInterceptor ?
						responseSuccessInterceptor(res) :
						res;
					// todo
					resolve(newRes);
				},
				fail(err)
				{
					const errRes = responseFailInterceptor ?
						responseFailInterceptor(err) :
						err;
					reject(errRes);
				},
			});
		});
	}
	真正的axios.interceptors = {
		request:
		{
			use(getNewConf)
			{
				// 把getNewConf存起来等着执行
				requestInterceptorQuece.push(getNewConf);
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
	真正的axios.get = function(url, conf)
	{
		真正的axios(
		{
			url,
			method: 'get',
			...conf,
		});
	};
	真正的axios.create = function(conf)
	{
		requestInterceptorQuece.push(c => (
		{
			...c,
			url: conf.baseURL + c.url,
		}));
		return 真正的axios;
	};
	return 真正的axios;
})();
export default uxios;