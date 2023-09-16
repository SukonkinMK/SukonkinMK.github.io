<template>
    <div class="header center">
        <a href="index.html" class="header_logo">
            <img src="img/Logo.jpg" alt="logo" class="logo">
            <p class="logo-text">Interno</p>
        </a>
        <nav class="header__menu">
            <a href="index.html" class="header__menu_link">Home</a>
            <a href="blogDetails.html" class="header__menu_link">Project</a>
            <a href="blog.html" class="header__menu_link">Blog</a>
        </nav>
    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    name: 'HeaderComponent'
}
</script>

<style scoped src="@/assets/style.css"></style>
  