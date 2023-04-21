<template>
	<div>
		<div>{{ store.counter }}</div>
		<button @click="store.onAdd">加</button>
		<div @click='goHome'>主页</div>
		<navigator url="/pages/login/index">登录</navigator>
	</div>
</template>

<script setup>
	import
	{
		ref,
	}
	from 'vue';
	import
	{
		counterStore
	}
	from '../../store/counter.js';
	const store = counterStore();
	const counter = ref(1);

	function onAdd()
	{
		counter.value++;
	}
	// 跳转主页
	function goHome()
	{
		wx.switchTab(
		{
			url: "/pages/home/index"
		})
	}
</script>

<style>
	.content
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo
	{
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area
	{
		display: flex;
		justify-content: center;
	}

	.title
	{
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>