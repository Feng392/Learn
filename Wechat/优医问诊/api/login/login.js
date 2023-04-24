import req from "@/utils/req.js"
export function onLogin(data)
{
	return req(
	{
		url: '/login/password',
		method: 'post',
		data,
	})
}