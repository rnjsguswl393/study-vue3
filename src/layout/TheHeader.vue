<template>
    <header>
        <nav class="navbar navbar-expand-sm bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MY</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/home" active-class="active">home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/about" active-class="active">about</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/posts" active-class="active">posts</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/nested" active-class="active">nested</RouterLink>
                        </li>
                    </ul>
                    <div class="d-flex" type="button">
                        <button class="btn btn-outline-success" type="submit">postedit</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
