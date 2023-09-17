<template>
    <section class="banner__blogDetails">
        <img src="img/Banner_blog.jpg" alt="baner" class="banner__blogDetails_img">
    </section>
    <section class="blog_details center">
        <div class="blog_details__box">
            <div v-for="item in filterArray" :key="item.id" class="blog_details__posts">
                <div class="blog_details__post">
                    <h3 class="blog_details__post__heading">{{ item.title }}</h3>
                    <img :src=item.src alt="latestPost" class="blog_details__post_img">
                    <div class="blog_details__post_info">
                        <p class="blog_details__post_date">{{ item.date }}</p>
                        <p class="blog_details__post_tags">{{ item.designType }}</p>
                    </div>
                    <p class="blog_details__post_text">{{ item.text }}</p>
                </div>
                <div class="postSplitter">
                    <div class="splitter_icon">"</div>
                    <div class="splitter_text">The detail are not the details. They make the design.</div>
                </div>
            </div>
        </div>
        <div class="blog_details__tags">
            <h3 class="blog_details__tags_heading">Tags</h3>
            <div class="blog_details__tags_box">
                <div class="tags-item">
                    <input type="radio" name="tag" value="Kitchen" id="Kitchen" class="tag_checkbox" v-model="activeTag">
                    <label for="Kitchen" class="tag_label">Kitchen</label>
                </div>
                <div class="tags-item">
                    <input type="radio" name="tag" value="Bedroom" id="Bedroom" class="tag_checkbox" v-model="activeTag">
                    <label for="Bedroom" class="tag_label">Bedroom</label>
                </div>
                <div class="tags-item">
                    <input type="radio" name="tag" value="Building" id="Building" class="tag_checkbox" v-model="activeTag">
                    <label for="Building" class="tag_label">Building</label>
                </div>
                <div class="tags-item">
                    <input type="radio" name="tag" value="Architecture" id="Architecture" class="tag_checkbox"
                        v-model="activeTag">
                    <label for="Architecture" class="tag_label">Architecture</label>
                </div>
                <div class="tags-item">
                    <input type="radio" name="tag" value="KitchenPlanning" id="KitchenPlanning" class="tag_checkbox"
                        v-model="activeTag">
                    <label for="KitchenPlanning" class="tag_label">Kitchen Planning</label>
                </div>

            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'App',
    data() {
        return {
            activeTag: "",
            posts: [
                {
                    id: 1,
                    src: "img/article1.jpg",
                    designType: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December, 2022",
                    tags: "Bedroom Building Architecture",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia nulla reiciendis, nam eveniet laborum a quisquam? Est odio eaque quos minus laboriosam. Voluptates, asperiores est assumenda recusandae placeat illum optio?"
                },
                {
                    id: 2,
                    src: "img/article2.jpg",
                    designType: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December, 2022",
                    tags: "Building Architecture",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia nulla reiciendis, nam eveniet laborum a quisquam? Est odio eaque quos minus laboriosam. Voluptates, asperiores est assumenda recusandae placeat illum optio?"
                },
                {
                    id: 3,
                    src: "img/article3.jpg",
                    designType: "Interior Design",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "25 December, 2022",
                    tags: "Kitchen KitchenPlanning",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia nulla reiciendis, nam eveniet laborum a quisquam? Est odio eaque quos minus laboriosam. Voluptates, asperiores est assumenda recusandae placeat illum optio?"
                },
                {
                    id: 4,
                    src: "img/article4.jpg",
                    designType: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December, 2022",
                    tags: "Bedroom",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia nulla reiciendis, nam eveniet laborum a quisquam? Est odio eaque quos minus laboriosam. Voluptates, asperiores est assumenda recusandae placeat illum optio?"
                },
                {
                    id: 5,
                    src: "img/article5.jpg",
                    designType: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December, 2022",
                    tags: "Architecture",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia nulla reiciendis, nam eveniet laborum a quisquam? Est odio eaque quos minus laboriosam. Voluptates, asperiores est assumenda recusandae placeat illum optio?"
                },
                {
                    id: 6,
                    src: "img/article6.jpg",
                    designType: "Interior Design",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "25 December, 2022",
                    tags: "Building",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia nulla reiciendis, nam eveniet laborum a quisquam? Est odio eaque quos minus laboriosam. Voluptates, asperiores est assumenda recusandae placeat illum optio?"
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
  