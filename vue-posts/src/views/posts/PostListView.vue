<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter v-model:title="params.title_like" v-model:limit="params._limit">
		</PostFilter>

		<hr class="my-4" />

		<AppLoading v-if="loading"></AppLoading>

		<AppError v-else-if="error" :message="error.message"></AppError>

		<template v-else>
			<AppGrid :items="posts">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:createdAt="item.createdAt"
						@click="goPage(item.id)"
						@modal="openModal(item)"
					>
					</PostItem>
				</template>
			</AppGrid>
			<AppPagination
				:current-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			>
			</AppPagination>
		</template>
		<PostModal
			v-model="show"
			:title="modalTitle"
			:content="modalContent"
			:created-at="modalCreateAt"
		>
		</PostModal>

		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

// import { getPosts } from '@/api/posts';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAxios } from '@/hooks/useAxios';

//컴포저블 함수
// const error = ref(null);
// const loading = ref(false);

const router = useRouter();
const params = ref({
	_sort: 'createAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});

const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { params });

const totalCount = computed(() => response.value.headers['x-total-count']);
//총 개수에서 몇개씩 보여줄것인지로 나눠서 pagecount 를 만듬
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);
// 데이터 받아와서 뿌려주기
// const fetchPosts = async () => {
// 	try {
// 		loading.value = true;
// 		const { data, headers } = await getPosts(params.value);
// 		posts.value = data;
// 		totalCount.value = headers['x-total-count'];
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };

// 위의 코드와 같은 모습으로 동작하게 된다.
// const fetchPosts = () => {
// 	getPosts()
// 		.then(response => {
// 			posts.value = { ...response };
// 			console.log('response', posts.value);
// 		})
// 		.catch(error => {
// 			console.log('error :', error);
// 		});
// };

// watchEffect(fetchPosts);
// fetchPosts();
const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: 'hello',
		// },
		// hash: '#world',
	});
};
const modalTitle = ref('asdasd');

const modalContent = ref('asdasd');
const modalCreateAt = ref('asdasd');

//모달창
const show = ref(false);
const openModal = ({ title, content, createdAt }) => {
	console.log('@!#!@#');

	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreateAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
