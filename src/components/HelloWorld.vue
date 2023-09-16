<template>
  <div class="news__box">
    <article v-for="article in articles" :key="article.id" class="blog__article">
      <div class="blog__article_picture">
        <img :src="article.src" alt="photo" class="blog__article_img">
        <p class="blog__article_design">{{ article.designType }}</p>
      </div>
      <h3 class="blog__article_title">
        {{ article.title }}
      </h3>
      <div class="blog__article_footer">
        <p class="blog__article_date">{{ article.date }}</p>
        <a href="#" class="blog__article_link-btn">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          src: "img/article1.jpg",
          designType: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December, 2022"
        },
        {
          id: 2,
          src: "img/article2.jpg",
          designType: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December, 2022"
        },
        {
          id: 3,
          src: "img/article3.jpg",
          designType: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December, 2022"

        },
        {
          id: 4,
          src: "img/article4.jpg",
          designType: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December, 2022"
        },
        {
          id: 5,
          src: "img/article5.jpg",
          designType: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December, 2022"
        },
        {
          id: 6,
          src: "img/article6.jpg",
          designType: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December, 2022"
        }
      ],
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/style.css"></style>
