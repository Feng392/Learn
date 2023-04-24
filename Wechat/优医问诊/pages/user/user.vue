<template>
	<div class="container">
		我的
	</div>
</template>

<script setup>
	import * as api from '@/api/user/user.js'
	api.getUser();
</script>

<style lang="less" scoped></style>