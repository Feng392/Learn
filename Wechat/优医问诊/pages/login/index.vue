<template>
	<div class="login">
		<div class="header">
			<div>返回</div>
			<div class="register">注册</div>
		</div>
		<button @click="login">登录</button>
	</div>
</template>

<script setup>
	import * as api from '@/api/login/login.js'
	const params = {
		mobile: "13230000009",
		password: "abc12345"
	}

	function login()
	{
		api.onLogin(params);
		wx.switchTab(
		{
			url: "/pages/home/index"
		});
	}
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