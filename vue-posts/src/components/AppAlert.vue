<template>
	<div v-if="show" class="alert alert-warning" role="alert">
		{{ message }}
	</div>
	<div>2312312</div>
	<div>2312312</div>
	<div>2312312</div>
</template>

<script setup>
defineProps({
	show: {
		type: Boolean,
		default: false,
	},
	message: {
		type: String,
		required: true,
	},
});
</script>

<style>
.app-arlet {
	position: fixed;
	top: 10px;
	right: 10px;
	font: black;
}
</style>
