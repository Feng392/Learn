import axios from "@/unit/axios.js"
export function onLogin(data)
{
	return axios(
	{
		url: 'https://consult-api.itheima.net/login/password',
		method: 'post',
		data,
	})
}