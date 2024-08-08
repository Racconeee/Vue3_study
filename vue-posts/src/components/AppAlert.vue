<!-- <template>
	<Transition name="slide">
		<div v-if="show" class="alert" :class="typestyle">
			{{ message }}
			{{ type }}
		</div>
	</Transition>
</template> -->

<template>
	<div class="app-arlet">
		<TransitionGroup name="slide">
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				class="alert"
				:class="typestyle(type)"
				role="alert"
			>
				{{ message }}
				{{ type }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
});
const typestyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');

// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: '',
// 		valudator: value => ['success', 'error'].includes(value),
// 	},
// });

// const typestyle = computed(() =>
// 	props.type === 'error' ? 'alert-danger' : 'alert-success',
// );
</script>

<style>
.app-arlet {
	position: fixed;
	top: 10px;
	right: 10px;
	font: black;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
	opacity: 0;
}
.slide-enter-from .slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-to,
.slide-leave-form {
	opacity: 1;
	transform: translateY(0px);
}
</style>
