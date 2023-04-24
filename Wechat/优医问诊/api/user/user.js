import req from "@/utils/req.js"
export function getUser()
{
	return req(
	{
		url: '/patient/myUser',
	})
}