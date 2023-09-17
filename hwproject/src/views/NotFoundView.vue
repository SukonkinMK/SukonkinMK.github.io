<template>
    <div class="notFound_box center">
        <div class="notFound_box__content">
            <h1 class="notFound_box__content_title">404</h1>
            <p class="notFound_box__content_desc">We are sorry, but the page you requested was not found</p>
            <router-link to="/" class="banner__button">
                <p class="banner__button_text">Back To Home</p>
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
        <img src="img/NotFound.jpg" alt="NotFound" class="notFound_box_img">
    </div>
</template>


<style scoped src="@/assets/style.css"></style>