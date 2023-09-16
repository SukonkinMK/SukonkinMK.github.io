<template>
    <div class="product">
        <p class="product__name">{{ product.name }}</p>
        <p class="product__price">{{ formattedPrice }}</p>
        <p v-if="product.available" class="product__available">Available</p>
        <p v-else class="product__not-available">Out of stock</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            product:{
                name: 'PlaceHolder',
                price: 99.99,
                available: 0
            }
        }
    },
    name: 'AdditionalTask',
    computed: {
        formattedPrice() {
            return '$' + this.product.price;
        }
    }
}
</script>

<style></style>
  