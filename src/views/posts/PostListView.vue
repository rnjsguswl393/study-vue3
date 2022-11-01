<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4" />
        <div class="row g-3">
            <div class="row g-3">
                <div class="col-3">
                    <input v-model="params.title_like" type="text" class="form-control" />
                </div>
                <div class="col-3">
                    <select v-model="params._limit" class="form-select">
                        <option value="3">3개씩 보기</option>
                        <option value="6">6개씩 보기</option>
                        <option value="9">9개씩 보기</option>
                    </select>
                </div>
            </div>
            <div v-for="post in posts" :key="post.id" class="col-4">
                <PostItem :title="post.title" :content="post.content" :created-at="post.createdAt" @click="goPage(post.id)"></PostItem>
            </div>
        </div>
    </div>
    <nav class="mt-5" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link" @click.prevent="--params._page" aria-label="Previous" :class="{ disabled: params._page === 1 }">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="p in pageCount" :key="p" :class="{ active: params._page === p }">
                <a class="page-link" @click.prevent="params._page = p">{{ p }}</a>
            </li>
            <li class="page-item" :class="{ disabled: pageCount <= params._page }">
                <a class="page-link" @click.prevent="++params._page" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
const params = ref({
    _sort: 'createdAt',
    _order: 'desc',
    _limit: 3,
    _page: 1,
    title_like: '',
});
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const fetchPosts = async () => {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
};
// fetchPosts();
watchEffect(fetchPosts); //watch와 차이점: 초기에 한번 실행
const goPage = id => {
    // router.push(`/posts/${id}`);
    router.push({
        name: 'PostDetail',
        params: {
            id,
        },
    });
};
</script>

<style lang="scss" scoped></style>
