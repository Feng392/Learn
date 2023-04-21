function uinAxios(config)
{
	return new Promise((resolve, reject) =>
	{
		const xhr = uni.request();
		xhr(config.method, config.url); // 发请求
		// 拿数据
		success = function()
		{
			if (config.success.data.code === 200)
			{
				// 请求成功了
				resolve(
				{
					data: JSON.parse(xhr.responseText),
					config,
					// ...
				});
			}
			else
			{
				reject(xhr);
			}
		};
	});
}
// bxios(
// 	{
// 		method: 'get',
// 		url: 'https://consult-api.itheima.net/patient/myUser',
// 		header:
// 		{
// 			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOCIsImlhdCI6MTY4MTg4OTQyMywiZXhwIjoxNjgyMDYyMjIzfQ.KgWEDM3VgtaVvACZIbwlWvZj9K-auruosTo0pB1cDNI`
// 		},
// 	})
// 	.then(res =>
// 	{
// 		// ...
// 		console.log(res)
// 	});
export default uinAxios;