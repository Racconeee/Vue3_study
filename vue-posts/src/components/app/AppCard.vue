<template>
	<div class="card">
		<div class="card-header">
			<slot name="header"></slot>
		</div>
		<div class="card-body">
			<slot></slot>
		</div>
		<div class="card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
