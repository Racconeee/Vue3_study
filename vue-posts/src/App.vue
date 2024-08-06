<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<template>
	<div class="container">
		<TheHeader></TheHeader>
		<TheView></TheView>
	</div>
</template>

<style scoped>
.container {
	background-color: rgb(177, 177, 138);
	height: 100vh; /* 전체 화면 높이를 채우도록 설정 */
	margin: 0;
	padding: 0;
}
</style>
