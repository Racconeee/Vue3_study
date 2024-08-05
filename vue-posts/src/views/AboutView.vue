<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			HOME 으로 이동
		</button>
	</div>
</template>

<script setup></script>

<style></style>
