<template>
    <div>
        <h2>{{ form.title }}</h2>
        <p>{{ form.content }}</p>
        <p class="text-muted">{{ form.createdAt }}</p>
        <hr class="my-4" />
        <div class="row g-2">
            <div class="col-auto">
                <button class="btn btn-outline-dark">이전글</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark">다음글</button>
            </div>
            <div class="col-auto me-auto"></div>
            <div class="col-auto">
                <button class="btn btn-outline-dark" @click="goListPage">목록</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-danger" @click="deletePostData">삭제</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts.js';
import { ref } from 'vue';
// const route = useRoute();
const router = useRouter();
// const id = route.params.id;
const form = ref({});

const props = defineProps({
    id: String,
});

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () => router.push({ name: 'PostEdit', params: { id: props.id } });
const setPost = ({ title, content, createdAt }) => {
    form.value.title = title;
    form.value.content = content;
    form.value.createdAt = createdAt;
};
const fetchPostData = async () => {
    try {
        const { data } = await getPostById(props.id);
        console.log(data);
        setPost(data);
    } catch {
        console.error(Error);
    }
};

fetchPostData();
const deletePostData = async () => {
    try {
        if (confirm('삭제 하시겠습니까?') === false) {
            return;
        }
        await deletePost(props.id);
        router.push({ name: 'PostList' });
    } catch {
        console.error(Error);
    }
};
</script>

<style lang="scss" scoped></style>
