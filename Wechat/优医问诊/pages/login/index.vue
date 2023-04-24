<template>
	<div class="login">
		<div class="header">
			<div>返回</div>
			<div class="register">注册</div>
		</div>
		<button @click="login">登录</button>
		<button open-type="getUserInfo" @getuserinfo="onGetuserinfo">授权</button>
		<button type="default" @click="wxLogin">微信-登录</button>
		<button type="default" @click="getOrder">创建-订单</button>
	</div>
</template>

<script setup>
	import
	{
		ref
	}
	from 'vue'
	import * as api from '@/api/login/login.js'
	// 引入发请求
	import uxios from '@/utils/uxios.js'
	const params = {
		mobile: "13230000009",
		password: "abc12345"
	}
	// 获取授权后数据
	const detail = ref(
	{});

	function login()
	{
		api.onLogin(params).then(res =>
			{
				console.log(res);
				if (res.data.code === 10000)
				{
					uni.setStorage(
					{
						key: 'token',
						data: res.data.data.token,
					});
				}
			})
			.catch(err =>
			{
				console.log(err);
			});;
		wx.switchTab(
		{
			url: "/pages/home/index"
		});
	}

	function onGetuserinfo(e)
	{
		console.log(e);
		detail = e.detail;
	}
	// 获取code
	wx.login().then((res) =>
	{
		console.log(res)
		detail.code = res.code;
	});
	// 授权后登录
	function wxLogin()
	{
		uxios.post('https://api-hmugo-web.itheima.net/api/public/v1/users/wxlogin',
		{
			code: 'detail.value.code',
			encryptedData: 'detail.value.encryptedData',
			iv: 'detail.value.iv',
			rawData: 'detail.value.rawData',
			signature: 'detail.value.signature',
		}).then((res) =>
		{
			console.log(res);
		}).catch(err =>
		{
			console.log(err)
		})
	}
	// 获取订单
	function getOrder()
	{}
</script>

<style lang="less">
	.login
	{
		.header
		{
			display: flex;
			align-items: center;
			justify-content: space-between;

			.register
			{
				color: green;
			}
		}
	}
</style>