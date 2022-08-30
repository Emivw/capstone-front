<template>
    <div class="container">
<div v-if="products" class="row my-5">
    <ProductCard 
    v-for="product in products" 
    :key="product" 
    :product="product"/>
</div>
<div v-else>Loading....</div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
        name: 'products',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
    components: { ProductCard }
}
</script>

<style scoped>

</style>