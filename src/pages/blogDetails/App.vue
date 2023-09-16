<template>
  <HeaderComponent />
  <section class="banner__blogDetails">
    <img src="img/Banner_blog.jpg" alt="baner" class="banner__blogDetails_img">
  </section>
  <FilterPost />
  <FooterComponent />
</template>

<script>
import FilterPost from '@/components/FilterPost.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    FilterPost,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped src="@/assets/style.css"></style>
