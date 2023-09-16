<template>
    <div class="post">
        <img :src=info.src alt="projPhoto" class="project__img round_left_bottom_coner">
        <div class="project__content">
            <div class="project__desc">
                <h3 class="project__title">{{ info.title }}</h3>
                <p class="project__type">{{ info.designType }}</p>
            </div>
            <a href="#" class="project__link-btn">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </a>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        info: {
            type: Object
        }
    }
}
</script>

<style scoped src="@/assets/style.css"></style>