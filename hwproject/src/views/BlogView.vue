<template>
    <section class="banner__blog">
        <div class="banner__blog_content">
            <h2 class="banner__blog_title">Articles & News</h2>
            <p class="banner__blog_desc">Home / Blog</p>
        </div>
    </section>
    <section class="blog_section center">
        <div class="latest-post">
            <h3 class="latest-post__heading">Latest Post</h3>
            <div class="latest-post__card">
                <img src="@/assets/img/LatestPost.jpg" alt="latestPost" class="latest-post__img">
                <div class="latest-post__content">
                    <div class="latest-post__subcontlatest-post__contentent">
                        <h4 class="latest-post__subcontent_heading">Low Cost Latest Invented Interior Designing Ideas</h4>
                        <p class="latest-post__subcontent_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpis
                            dignissim maximus.posuere in.Contrary to popular belief.</p>
                        <p class="latest-post__subcontent_text">Lorem Ipsum is not simply random text. It has roots in a
                            piece of
                            classica.</p>
                        <div class="blog__article_footer">
                            <p class="blog__article_date">26 December, 2022</p>
                            <a href="#" class="blog__article_link-btn">
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="news center">
        <h2 class="news__title">Articles & News</h2>
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
        <nav class="news_pagination">
            <a href="" class="news_pagination_link">01</a>
            <a href="" class="news_pagination_link">02</a>
            <a href="" class="news_pagination_link">03</a>
            <a href="" class="news_pagination_link"><svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </nav>
    </section>
</template>
  
<script>

export default {
    name: 'App',
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
}
</script>
  
<style scoped src="@/assets/style.css"></style>
  