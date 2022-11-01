<template>
    <div>about</div>
    <button class="btn btn-primary" @click="goHome">home가자</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
    router.push('/');
};
</script>

<style lang="scss" scoped></style>
