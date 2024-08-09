<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="my-4" />
		<AppGrid :items="items" v-slot="{ item }" col-class="col-3">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		{{ $person }}
		<div class="btn" @click="person.say">Click ME!!</div>
	</div>
</template>

<script>
export default {
	created() {
		console.log('person Create : ', this.$person.name);
		console.log(this);
		// this.$person.say(0);
	},
};
</script>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const person = inject('person');
</script>

<style></style>
