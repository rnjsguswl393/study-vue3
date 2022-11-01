import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreatView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/posts',
        name: 'PostList',
        component: PostListView,
    },
    {
        path: '/posts/create',
        name: 'PostCreate',
        component: PostCreateView,
    },
    {
        path: '/posts/:id',
        name: 'PostDetail',
        component: PostDetailView,
        props: true,
    },
    {
        path: '/posts/:id/edit',
        name: 'PostEdit',
        component: PostEditView,
    },
    {
        path: '/nested',
        name: 'Nested',
        component: NestedView,
        children: [
            {
                path: '',
                name: 'NestedHome',
                component: NestedHomeView,
            },
            {
                path: 'one', // /one 이렇게하면 절대 경로가 됨
                name: 'NestedOne',
                component: NestedOneView,
            },
            {
                path: 'two',
                name: 'NestedTwo',
                component: NestedTwoView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
