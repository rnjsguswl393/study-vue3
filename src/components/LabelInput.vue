<template>
	<label>
		이름
		<!-- <input
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
			type="text"
		/> -->
		<input v-model="value" />
	</label>
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['modelValue', 'first', 'last'],
	emits: ['update:modelValue', 'update:first', 'update:last'],

	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
