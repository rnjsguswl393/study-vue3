<template>
    <div>home</div>
    <button class="btn btn-primary" @click="$router.push('/about')">about가자</button>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>
<style lang="scss" scoped></style>
