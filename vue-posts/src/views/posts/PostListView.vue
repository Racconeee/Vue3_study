<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:createdAt="post.createdAt"
					@click="goPage(post.id)"
				>
				</PostItem>
			</div>
		</div>
		<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item">
					<a class="page-link" href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item">
					<a class="page-link" href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="my-5" />
		<AppCard>
			<PostDetailView :id="3"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();
const params = ref({
	_sort: 'createAt',
	_order: 'desc',
	_limit: 3,
});

const fetchPosts = async () => {
	try {
		const { data } = await getPosts(params.value);
		posts.value = data;
	} catch (error) {
		console.log(error);
	}
};

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

fetchPosts();
const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		query: {
			searchText: 'hello',
		},
		hash: '#world',
	});
};
</script>

<style lang="scss" scoped></style>
