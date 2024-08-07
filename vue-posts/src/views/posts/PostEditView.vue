<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button @click="edit" class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<AppAlert :show="showAlert" :message="alertMessage"> </AppAlert>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost, createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};

const form = ref({
	title: null,
	content: null,
});

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
		vAlert('수정이 완료되었습니다');
	} catch (error) {
		console.error(error);
		vAlert('네트워크 오류');
	}
};

//alert
const alertMessage = ref('');
const showAlert = ref(false);
const vAlert = message => {
	console.log('!@#');
	showAlert.value = true;
	setTimeout(() => {
		showAlert.value = false;
		alertMessage.value = message;
		console.log(showAlert);
		console.log(alertMessage);
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
