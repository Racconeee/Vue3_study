<template>
	<div>
		<ul class="nav nav=pills">
			<li class="nav-item">
				<router-link
					class="nav-link active"
					active-class="active"
					:to="{ name: 'NestedOne', repalce: true }"
				>
					Nested One</router-link
				>
			</li>
			<li class="nav-item">
				<router-link
					class="nav-link active"
					active-class="active"
					:to="{ name: 'NestedTwo', repalce: true }"
				>
					Nested Two</router-link
				>
			</li>
			<li class="nav-item">
				<router-link class="nav-link active" active-class="active" to="/nested">
					Nested home</router-link
				>
			</li>
		</ul>
		<hr class="my-4" />
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
