<template>
	<div>{{ $parent }}</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const msg = ref('hello~');
		const sayhi = () => {
			alert(msg.value);
		};
		return { msg, sayhi };
	},
};
</script>

<style lang="scss" scoped></style>
