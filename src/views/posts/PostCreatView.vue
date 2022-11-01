<template>
    <div>게시글 등록</div>
    <hr class="m-4" />
    <form @submit.prevent>
        <div class="mb-3">
            <label for="title" class="form-label">title</label>
            <input type="text" class="form-control" id="title" />
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">content</label>
            <textarea class="form-control" id="content" rows="3"></textarea>
        </div>
        <div class="pt-4">
            <button type="button" class="btn btn-outline-dark me-2">list</button>
            <button class="btn btn-primary">summit</button>
        </div>
    </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
