<template>
  <div class="header center">
    <a href="index.html" class="header_logo">
      <img src="img/Logo.jpg" alt="logo" class="logo">
      <p class="logo-text">Interno</p>
    </a>
    <nav class="header__menu">
      <router-link to="/" class="header__menu_link">Home</router-link>
      <router-link to="/project" class="header__menu_link">Project</router-link>
      <router-link to="/blog" class="header__menu_link">Blog</router-link>
      <router-link to="/blogDetails" class="header__menu_link">Blog Details</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<style scoped src="@/assets/style.css"></style>
