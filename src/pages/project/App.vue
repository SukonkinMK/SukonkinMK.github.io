<template>
  <HeaderComponent />
  <section class="banner__project">
    <div class="banner__blog_content">
      <h2 class="banner__blog_title">Our Project</h2>
      <p class="banner__blog_desc">Home / Project</p>
    </div>
  </section>
  <div class="blog_details__tags_box center">
    <div class="tags-item">
      <input type="radio" name="tag" value="Bathroom" id="Bathroom" class="tag_checkbox" v-model="activeTag">
      <label for="Bathroom" class="tag_label">Bathroom</label>
    </div>
    <div class="tags-item">
      <input type="radio" name="tag" value="Bedroom" id="Bedroom" class="tag_checkbox" v-model="activeTag">
      <label for="Bedroom" class="tag_label">Bedroom</label>
    </div>
    <div class="tags-item">
      <input type="radio" name="tag" value="Kitchan" id="Kitchan" class="tag_checkbox" v-model="activeTag">
      <label for="Kitchan" class="tag_label">Kitchan</label>
    </div>
    <div class="tags-item">
      <input type="radio" name="tag" value="LivingArea" id="LivingArea" class="tag_checkbox" v-model="activeTag">
      <label for="LivingArea" class="tag_label">Living Area</label>
    </div>
  </div>
  <div class="posts center">
    <div v-for="(post, index) in filterArray" :key="index">
      <CardComponent :info="post" />
    </div>
  </div>


  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    CardComponent
  },
  data() {
    return {
      activeTag: "",
      posts: [
        {
          id: 1,
          src: "img/article1.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Bedroom1",
          tags: "Bedroom"
        },
        {
          id: 2,
          src: "img/article2.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Bedroom2",
          tags: "Bedroom"
        },
        {
          id: 3,
          src: "img/article3.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Bedroom3",
          tags: "Bedroom"
        },
        {
          id: 4,
          src: "img/article4.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Bathroom1",
          tags: "Bathroom"
        },
        {
          id: 5,
          src: "img/article5.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Bathroom2",
          tags: "Bathroom"
        },
        {
          id: 6,
          src: "img/article1.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Bathroom3",
          tags: "Bathroom"
        },
        {
          id: 7,
          src: "img/article5.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Kitchan1",
          tags: "Kitchan"
        },
        {
          id: 8,
          src: "img/article3.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Kitchan2",
          tags: "Kitchan"
        },
        {
          id: 9,
          src: "img/article2.jpg",
          designType: "Decor / Artchitecture",
          title: "Minimal Kitchan3",
          tags: "Kitchan"
        },
        {
          id: 10,
          src: "img/article4.jpg",
          designType: "Decor / Artchitecture",
          title: "Living Area1",
          tags: "LivingArea"
        },
        {
          id: 11,
          src: "img/article1.jpg",
          designType: "Decor / Artchitecture",
          title: "Living Area2",
          tags: "LivingArea"
        },
        {
          id: 12,
          src: "img/article5.jpg",
          designType: "Decor / Artchitecture",
          title: "Living Area3",
          tags: "LivingArea"
        }
      ]
    }
  },
  computed: {
    filterArray() {
      return this.posts.filter(item => item.tags.includes(this.activeTag));
    }
  },
}
</script>

<style scoped src="@/assets/style.css"></style>
