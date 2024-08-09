<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType">
		</AppAlert> -->
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAxios } from '@/hooks/useAxios';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};

// const form = ref({
// 	title: null,
// 	content: null,
// });

const { error, loading, data: form } = useAxios(`/posts/${id}`);

const fetchPost = async () => {
	const { data } = await getPostById(id);
	setForm(data);
};

const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
	console.log(form.value.title);
};

fetchPost();
const edit = async () => {
	try {
		console.log(form.value);
		await updatePost(id, { ...form.value });
		// router.push({ name: 'PostDetail', params: { id } });
		vAlert('수정이 완료되었습니다', 'sueccess');
		console.log(2);
	} catch (error) {
		console.error(error);
		vAlert('Error 발생 !! ', 'error.value');
	}
};

//alert
// const alertMessage = ref('');
// const showAlert = ref(false);
// const alertType = ref('');
const alerts = ref([]);
const vAlert = (message, type = 'error') => {
	// console.log('!@#');
	alerts.value.push({ message, type });
	console.log(1);
	console.log(alerts.value);
	// showAlert.value = true;
	// alertMessage.value = message;
	// alertType.value = type;
	setTimeout(() => {
		alerts.value.shift();
		// showAlert.value = false;
		// alertMessage.value = message;
		// console.log(showAlert);
		// console.log(alertMessage);
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
